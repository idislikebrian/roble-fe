export async function POST(req) {
  try {
    const body = await req.json();
    const {
      name,
      company,
      email,
      phone,
      addressLine1,
      city,
      state,
      zipCode,
      projectType,
      services,
      projectDescription,
      budgetRange,
      communicationMethod,
      appointmentDate,
      timeframe,
      hearAboutUs,
    } = body;

    const baseId = process.env.AIRTABLE_BASE_ID;
    const accessToken = process.env.AIRTABLE_ACCESS_TOKEN;
    const estimatesTable = process.env.AIRTABLE_ESTIMATES_TABLE;
    const customersTable = process.env.AIRTABLE_CUSTOMERS_TABLE;

    if (!baseId || !accessToken || !estimatesTable || !customersTable) {
      return new Response(JSON.stringify({ success: false, error: "Server configuration error" }), { status: 500 });
    }

    console.log("Services array:", services);
    console.log("Data being sent to Airtable:", {
      Name: name,
      Company: company,
      Email: email,
      Phone: phone,
      Address: `${addressLine1}, ${city}, ${state}, ${zipCode}`,
      ProjectType: projectType,
      Services: services,
      Description: projectDescription,
      BudgetRange: budgetRange,
      CommunicationMethod: communicationMethod,
      AppointmentDate: appointmentDate,
      Timeframe: timeframe,
      HowHeard: hearAboutUs,
    });

    if (!Array.isArray(services) || services.some(service => typeof service !== 'string')) {
      throw new Error("Services must be an array of strings.");
    }

    // Convert appointmentDate to ISO 8601 format if provided
    const formattedAppointmentDate = appointmentDate ? new Date(appointmentDate).toISOString() : null;

    // Step 1: Check if the customer already exists
    const customerResponse = await fetch(`https://api.airtable.com/v0/${baseId}/${customersTable}?filterByFormula={Name}="${name}"`, {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const customerData = await customerResponse.json();

    let customerId;
    if (customerData.records && customerData.records.length > 0) {
      // Customer exists, use the first record's ID
      customerId = customerData.records[0].id;
    } else {
      // Customer does not exist, create a new record
      const newCustomerResponse = await fetch(`https://api.airtable.com/v0/${baseId}/${customersTable}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: {
            Name: name,
            Company: company,
            Email: email,
            Phone: phone,
            Address: `${addressLine1}, ${city}, ${state}, ${zipCode}`,
          },
        }),
      });

      const newCustomerData = await newCustomerResponse.json();
      if (!newCustomerResponse.ok) {
        throw new Error(`Airtable error: ${newCustomerData.error?.message}`);
      }
      customerId = newCustomerData.id; // Use the new customer's ID
    }

    // Step 2: Create the estimate record
    const response = await fetch(`https://api.airtable.com/v0/${baseId}/${estimatesTable}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: {
          Name: [customerId], // Link to the customer record
          Company: company,
          Email: email,
          Phone: phone,
          Address: `${addressLine1}, ${city}, ${state}, ${zipCode}`,
          ProjectType: projectType,
          Services: services,
          Description: projectDescription,
          BudgetRange: budgetRange,
          CommunicationMethod: communicationMethod,
          AppointmentDate: formattedAppointmentDate,
          Timeframe: timeframe,
          HowHeard: hearAboutUs,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Airtable error: ${data.error?.message}`);
    }

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error) {
    console.error("Error saving estimate to Airtable:", error);
    return new Response(JSON.stringify({ success: false, error: "Internal Server Error" }), { status: 500 });
  }
}