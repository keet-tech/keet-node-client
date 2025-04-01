# Reference

## Integrations AestheticRecords

<details><summary><code>client.integrations.aestheticRecords.<a href="/src/api/resources/integrations/resources/aestheticRecords/client/Client.ts">createAppointment</a>({ ...params }) -> Keet.CreateAestheticRecordsAppointmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a client appointment

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.aestheticRecords.createAppointment({
    xAccountToken: "X-Account-Token",
    body: {
        patientId: 1,
        patientName: "patientName",
        patientPhone: "patientPhone",
        patientEmail: "patientEmail",
        clinicId: 1,
        doubleBooking: true,
        patientToBeCharged: 1,
        date: "2023-01-15",
        time: "time",
        notes: "notes",
        typeOfAppointment: "in_person",
        outsideScheduledHours: true,
        appointmentService: [
            {
                id: 1,
                duration: 1,
            },
            {
                id: 1,
                duration: 1,
            },
        ],
        duration: 1,
        providerId: 1,
        clearentEmailId: "clearentEmailId",
        clearentZip: "clearentZip",
        paymentInfo: {
            creditCardNumber: 1,
            expirationDate: "expirationDate",
            cvv: 1,
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.integrations.aestheticRecords.CreateAestheticRecordsAppointmentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AestheticRecords.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.aestheticRecords.<a href="/src/api/resources/integrations/resources/aestheticRecords/client/Client.ts">getClients</a>({ ...params }) -> Keet.GetAestheticRecordsClientsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of clients.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.aestheticRecords.getClients({
    xAccountToken: "X-Account-Token",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.integrations.aestheticRecords.GetClientsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AestheticRecords.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.aestheticRecords.<a href="/src/api/resources/integrations/resources/aestheticRecords/client/Client.ts">getClientAppointments</a>(clientId, { ...params }) -> Keet.GetAestheticRecordsClientAppointmentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of appointments for a specific client.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.aestheticRecords.getClientAppointments(1, {
    xAccountToken: "X-Account-Token",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**clientId:** `number`

</dd>
</dl>

<dl>
<dd>

**request:** `Keet.integrations.aestheticRecords.GetClientAppointmentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AestheticRecords.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.aestheticRecords.<a href="/src/api/resources/integrations/resources/aestheticRecords/client/Client.ts">getClient</a>(clientId, { ...params }) -> Keet.GetAestheticRecordsClientResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a client

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.aestheticRecords.getClient(1, {
    xAccountToken: "X-Account-Token",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**clientId:** `number`

</dd>
</dl>

<dl>
<dd>

**request:** `Keet.integrations.aestheticRecords.GetClient`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AestheticRecords.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.aestheticRecords.<a href="/src/api/resources/integrations/resources/aestheticRecords/client/Client.ts">getClinics</a>({ ...params }) -> Keet.GetAestheticRecordsClinicsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get clinics

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.aestheticRecords.getClinics({
    xAccountToken: "X-Account-Token",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.integrations.aestheticRecords.GetClinicsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AestheticRecords.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.aestheticRecords.<a href="/src/api/resources/integrations/resources/aestheticRecords/client/Client.ts">getProviders</a>({ ...params }) -> Keet.GetAestheticRecordsProviderResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get providers

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.aestheticRecords.getProviders({
    xAccountToken: "X-Account-Token",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.integrations.aestheticRecords.GetProvidersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AestheticRecords.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.aestheticRecords.<a href="/src/api/resources/integrations/resources/aestheticRecords/client/Client.ts">getProducts</a>({ ...params }) -> Keet.GetAestheticRecordsProductsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get product inventory

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.aestheticRecords.getProducts({
    xAccountToken: "X-Account-Token",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.integrations.aestheticRecords.GetProducts`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AestheticRecords.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.aestheticRecords.<a href="/src/api/resources/integrations/resources/aestheticRecords/client/Client.ts">getProductPriceList</a>({ ...params }) -> Keet.GetAestheticRecordsProductPriceListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get product price list for a given clinic.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.aestheticRecords.getProductPriceList({
    xAccountToken: "X-Account-Token",
    clinicId: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.integrations.aestheticRecords.GetProductPriceList`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AestheticRecords.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.aestheticRecords.<a href="/src/api/resources/integrations/resources/aestheticRecords/client/Client.ts">getProduct</a>(productId, { ...params }) -> Keet.GetAestheticRecordsGetProductResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a product

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.aestheticRecords.getProduct(1, {
    xAccountToken: "X-Account-Token",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**productId:** `number`

</dd>
</dl>

<dl>
<dd>

**request:** `Keet.integrations.aestheticRecords.GetProduct`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AestheticRecords.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.aestheticRecords.<a href="/src/api/resources/integrations/resources/aestheticRecords/client/Client.ts">getAvailability</a>({ ...params }) -> Keet.GetAestheticRecordsProviderAvailabilityResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of provider availability for a given date and service.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.aestheticRecords.getAvailability({
    xAccountToken: "X-Account-Token",
    appointmentType: "in_person",
    clinicId: 1,
    providerIds: [1, 1],
    serviceIds: [1, 1],
    startDate: "2023-01-15",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.integrations.aestheticRecords.GetProviderAvailability`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AestheticRecords.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.aestheticRecords.<a href="/src/api/resources/integrations/resources/aestheticRecords/client/Client.ts">getAppointments</a>({ ...params }) -> Keet.GetAestheticRecordsCalendarResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get appointments for a list of providers

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.aestheticRecords.getAppointments({
    xAccountToken: "X-Account-Token",
    clinicId: 1,
    startDate: "2023-01-15",
    endDate: "2023-01-15",
    providerIds: [1, 1],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.integrations.aestheticRecords.GetAestheticRecordsCalendar`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AestheticRecords.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.aestheticRecords.<a href="/src/api/resources/integrations/resources/aestheticRecords/client/Client.ts">getAccountData</a>({ ...params }) -> Keet.GetAestheticRecordsAccountData</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get data associated with all of the accounts for this MedSpa.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.aestheticRecords.getAccountData({
    xAccountToken: "X-Account-Token",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.integrations.aestheticRecords.GetAestheticRecordsAccountDataRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AestheticRecords.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.aestheticRecords.<a href="/src/api/resources/integrations/resources/aestheticRecords/client/Client.ts">getAppointmentTypes</a>({ ...params }) -> Keet.GetAppointmentTypesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of appointment types for a given provider and modality

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.aestheticRecords.getAppointmentTypes({
    xAccountToken: "X-Account-Token",
    providerId: 1,
    clinicId: 1,
    modality: "in_person",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.integrations.aestheticRecords.GetAppointmentTypesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AestheticRecords.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Integrations Vin

<details><summary><code>client.integrations.vin.<a href="/src/api/resources/integrations/resources/vin/client/Client.ts">createSalesAppointment</a>({ ...params }) -> Keet.CreateVinAppointmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a sales appointment

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.vin.createSalesAppointment({
    xAccountToken: "X-Account-Token",
    leadId: "leadId",
    customerId: "customerId",
    dealerId: "dealerId",
    description: "description",
    endDate: "endDate",
    startDate: "startDate",
    assignedUserId: "assignedUserId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.integrations.vin.CreateVinAppointmentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.vin.<a href="/src/api/resources/integrations/resources/vin/client/Client.ts">getAppointments</a>({ ...params }) -> Keet.GetSalesAppointmentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of sales appointments

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.vin.getAppointments({
    xAccountToken: "X-Account-Token",
    pageNumber: 1,
    pageSize: 1,
    startDate: "startDate",
    endDate: "endDate",
    dealerId: "dealerId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.integrations.vin.GetVinAppointmentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.vin.<a href="/src/api/resources/integrations/resources/vin/client/Client.ts">getUsers</a>({ ...params }) -> Keet.GetUsersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of users and assigned users ids.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.vin.getUsers({
    xAccountToken: "X-Account-Token",
    dealerId: "dealerId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.integrations.vin.GetVinUsers`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.vin.<a href="/src/api/resources/integrations/resources/vin/client/Client.ts">getDealers</a>({ ...params }) -> Keet.GetVinDealersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of dealers

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.vin.getDealers({
    xAccountToken: "X-Account-Token",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.integrations.vin.GetVinDealers`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.vin.<a href="/src/api/resources/integrations/resources/vin/client/Client.ts">searchCustomers</a>({ ...params }) -> Keet.SearchVinCustomersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search for customers

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.vin.searchCustomers({
    xAccountToken: "X-Account-Token",
    firstName: "firstName",
    lastName: "lastName",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.integrations.vin.SearchCustomersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.vin.<a href="/src/api/resources/integrations/resources/vin/client/Client.ts">getVehicles</a>({ ...params }) -> Keet.GetVinVehiclesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of vehicles

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.vin.getVehicles({
    xAccountToken: "X-Account-Token",
    dealerId: "dealerId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.integrations.vin.GetVinVehiclesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.vin.<a href="/src/api/resources/integrations/resources/vin/client/Client.ts">getLeadSourceOptions</a>({ ...params }) -> Keet.GetVinLeadSourceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of the lead sources for adding a customer

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.vin.getLeadSourceOptions({
    xAccountToken: "X-Account-Token",
    dealerId: "dealerId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.integrations.vin.GetVinLeadSourceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.vin.<a href="/src/api/resources/integrations/resources/vin/client/Client.ts">getLeadTypeOptions</a>({ ...params }) -> Keet.GetVinLeadTypeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of the lead types for adding a customer

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.vin.getLeadTypeOptions({
    xAccountToken: "X-Account-Token",
    dealerId: "dealerId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.integrations.vin.GetVinLeadTypeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.vin.<a href="/src/api/resources/integrations/resources/vin/client/Client.ts">getCompanyTypeOptions</a>({ ...params }) -> Keet.GetVinCompanyTypeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of the company types for adding a customer

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.vin.getCompanyTypeOptions({
    xAccountToken: "X-Account-Token",
    dealerId: "dealerId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.integrations.vin.GetVinCompanyTypeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.vin.<a href="/src/api/resources/integrations/resources/vin/client/Client.ts">createCustomer</a>({ ...params }) -> Keet.CreateVinCustomerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a customer

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.vin.createCustomer({
    xAccountToken: "X-Account-Token",
    customer: {
        homePhone: "homePhone",
        firstName: "firstName",
        lastName: "lastName",
        email: "email",
        vehicleNumber: "vehicleNumber",
    },
    dealerId: "dealerId",
    sourceName: "sourceName",
    sourceId: "sourceId",
    leadTypeId: "leadTypeId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.integrations.vin.CreateVinCustomer`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.vin.<a href="/src/api/resources/integrations/resources/vin/client/Client.ts">createLead</a>({ ...params }) -> Keet.CreateVinLeadResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a lead

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.vin.createLead({
    xAccountToken: "X-Account-Token",
    customerId: "customerId",
    dealerId: "dealerId",
    vehicleStockNumber: "vehicleStockNumber",
    sourceId: "sourceId",
    leadTypeId: "leadTypeId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.integrations.vin.CreateVinLead`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.vin.<a href="/src/api/resources/integrations/resources/vin/client/Client.ts">getAppointment</a>({ ...params }) -> Keet.GetSalesAppointmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a sales appointment

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.vin.getAppointment({
    xAccountToken: "X-Account-Token",
    appointmentId: "appointmentId",
    dealerId: "dealerId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.integrations.vin.GetVinAppointmentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.vin.<a href="/src/api/resources/integrations/resources/vin/client/Client.ts">createCall</a>({ ...params }) -> Keet.CreateVinCallResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a call

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.vin.createCall({
    xAccountToken: "X-Account-Token",
    leadId: "leadId",
    customerId: "customerId",
    dealerId: "dealerId",
    phoneNumber: "phoneNumber",
    note: "note",
    customerContactedCode: "Y",
    numberDialedCode: "Home",
    nextCallTimeFrame: 1,
    nextCallTimeSpanType: "Days",
    outbound: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.integrations.vin.CreateVinCall`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Link

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">createLinkToken</a>({ ...params }) -> Keet.CreateLinkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a link token that can be used to link accounts

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.link.createLinkToken({
    linkConfig: {
        endUserId: "<userId>",
        integration: "Vin",
        companyLogoUri: "https://example.com/logo.png",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.CreateLinkRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Link.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## LinkedAccounts

<details><summary><code>client.linkedAccounts.<a href="/src/api/resources/linkedAccounts/client/Client.ts">getLinkedAccount</a>(linkedAccountId) -> Keet.GetLinkedAccountResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.linkedAccounts.getLinkedAccount("linkedAccountId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**linkedAccountId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkedAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.linkedAccounts.<a href="/src/api/resources/linkedAccounts/client/Client.ts">deleteLinkedAccount</a>(linkedAccountId) -> Keet.DeleteLinkedAccountResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.linkedAccounts.deleteLinkedAccount("linkedAccountId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**linkedAccountId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkedAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.linkedAccounts.<a href="/src/api/resources/linkedAccounts/client/Client.ts">getToken</a>({ ...params }) -> Keet.GetTokenResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.linkedAccounts.getToken({
    publicToken: "...",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Keet.GetTokenRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkedAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
