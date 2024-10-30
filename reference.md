# Reference

## Integrations Amazon

<details><summary><code>client.integrations.amazon.<a href="/src/api/resources/integrations/resources/amazon/client/Client.ts">createSession</a>() -> Keet.CreateSessionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Amazon session that you can connect to via playwright. See [this link](/overview/integrations/custom-automations) for more info.

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
await client.integrations.amazon.createSession();
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

**requestOptions:** `Amazon.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.amazon.<a href="/src/api/resources/integrations/resources/amazon/client/Client.ts">getBuyAgainItems</a>() -> Keet.AmazonGetBuyAgainResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of products that you can buy again or have purchased before.

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
await client.integrations.amazon.getBuyAgainItems();
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

**requestOptions:** `Amazon.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.amazon.<a href="/src/api/resources/integrations/resources/amazon/client/Client.ts">buyNow</a>({ ...params }) -> Keet.AmazonOrderItemResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Order an item. **The end user must have a default address and payment method set**. Either ASIN or a valid amazon url to the item must be present. If both are present, the ASIN will be used.

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
await client.integrations.amazon.buyNow({
    asin: "string",
    itemUrl: "string",
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

**request:** `Keet.integrations.OrderAmazonItem`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Amazon.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.amazon.<a href="/src/api/resources/integrations/resources/amazon/client/Client.ts">addToCart</a>({ ...params }) -> Keet.AmazonAddToCartResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add an item to the cart. **The end user must have a default address and payment method set**. Either ASIN or a valid amazon url to the item must be present. If both are present, the ASIN will be used.

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
await client.integrations.amazon.addToCart({
    asin: "string",
    itemUrl: "string",
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

**request:** `Keet.integrations.AddToCart`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Amazon.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.amazon.<a href="/src/api/resources/integrations/resources/amazon/client/Client.ts">search</a>({ ...params }) -> Keet.AmazonSearchItemsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search for items.

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
await client.integrations.amazon.search({
    query: "string",
    isWholeFoods: true,
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

**request:** `Keet.integrations.AmazonSearchItemsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Amazon.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Integrations AmazonBusiness

<details><summary><code>client.integrations.amazonBusiness.<a href="/src/api/resources/integrations/resources/amazonBusiness/client/Client.ts">createSession</a>() -> Keet.CreateSessionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Amazon business session that you can connect to via playwright. See [this link](/overview/integrations/custom-automations) for more info.

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
await client.integrations.amazonBusiness.createSession();
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

**requestOptions:** `AmazonBusiness.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.amazonBusiness.<a href="/src/api/resources/integrations/resources/amazonBusiness/client/Client.ts">getOrders</a>({ ...params }) -> Keet.AmazonBusinessGetOrdersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get your Amazon Business orders. The default timespan is 30 days and default startIndex is 0.

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
await client.integrations.amazonBusiness.getOrders({
    timespan: Keet.OrdersTimespan.ThirtyDays,
    limit: 1,
    startIndex: 1,
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

**request:** `Keet.integrations.GetOrdersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AmazonBusiness.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.amazonBusiness.<a href="/src/api/resources/integrations/resources/amazonBusiness/client/Client.ts">getBuyAgainItems</a>() -> Keet.AmazonBusinessGetBuyAgainResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of products that you can buy again or have purchased before.

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
await client.integrations.amazonBusiness.getBuyAgainItems();
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

**requestOptions:** `AmazonBusiness.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.amazonBusiness.<a href="/src/api/resources/integrations/resources/amazonBusiness/client/Client.ts">buyNow</a>({ ...params }) -> Keet.AmazonBusinessOrderItemResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Order an item. **The end user must have a default address and payment method set**. Either ASIN or a valid amazon url to the item must be present. If both are present, the ASIN will be used.

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
await client.integrations.amazonBusiness.buyNow({
    itemUrl: "string",
    asin: "string",
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

**request:** `Keet.integrations.OrderItem`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AmazonBusiness.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Integrations AmazonSeller

<details><summary><code>client.integrations.amazonSeller.<a href="/src/api/resources/integrations/resources/amazonSeller/client/Client.ts">createSession</a>() -> Keet.CreateSessionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Amazon Seller session that you can connect to via playwright. See [this link](/overview/integrations/custom-automations) for more info.

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
await client.integrations.amazonSeller.createSession();
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

**requestOptions:** `AmazonSeller.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Integrations DispatchMe

<details><summary><code>client.integrations.dispatchMe.<a href="/src/api/resources/integrations/resources/dispatchMe/client/Client.ts">createSession</a>() -> Keet.CreateSessionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Dispatch Me session that you can connect to via playwright. See [this link](/overview/integrations/custom-automations) for more info.

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
await client.integrations.dispatchMe.createSession();
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

**requestOptions:** `DispatchMe.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.dispatchMe.<a href="/src/api/resources/integrations/resources/dispatchMe/client/Client.ts">editCustomer</a>(customerId, { ...params }) -> Keet.EditCustomerResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.dispatchMe.editCustomer("string", {
    customer: {
        firstName: "string",
        lastName: "string",
        organizationId: "string",
        companyName: "string",
        billingAddress: {
            street1: "string",
            street2: "string",
            city: "string",
            state: "string",
            postalCode: "string",
            district: "string",
            county: "string",
            country: "string",
            formattedAddress: "string",
            timezone: "string",
            latitude: 1.1,
            longitude: 1.1,
        },
        homeAddress: {
            street1: "string",
            street2: "string",
            city: "string",
            state: "string",
            postalCode: "string",
            district: "string",
            county: "string",
            country: "string",
            formattedAddress: "string",
            timezone: "string",
            latitude: 1.1,
            longitude: 1.1,
        },
        email: "string",
        notes: "string",
        phoneNumbers: [
            {
                primary: true,
                number: "string",
            },
        ],
        labels: ["string"],
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

**customerId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Keet.integrations.EditCustomer`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DispatchMe.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.dispatchMe.<a href="/src/api/resources/integrations/resources/dispatchMe/client/Client.ts">createCustomer</a>({ ...params }) -> Keet.CreateDispatchMeCustomerResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.dispatchMe.createCustomer({
    customer: {
        firstName: "string",
        lastName: "string",
        organizationId: "string",
        companyName: "string",
        billingAddress: {
            street1: "string",
            street2: "string",
            city: "string",
            state: "string",
            postalCode: "string",
            district: "string",
            county: "string",
            country: "string",
            formattedAddress: "string",
            timezone: "string",
            latitude: 1.1,
            longitude: 1.1,
        },
        homeAddress: {
            street1: "string",
            street2: "string",
            city: "string",
            state: "string",
            postalCode: "string",
            district: "string",
            county: "string",
            country: "string",
            formattedAddress: "string",
            timezone: "string",
            latitude: 1.1,
            longitude: 1.1,
        },
        email: "string",
        notes: "string",
        phoneNumbers: [
            {
                primary: true,
                number: "string",
            },
        ],
        labels: ["string"],
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

**request:** `Keet.integrations.CreateCustomer`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DispatchMe.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.dispatchMe.<a href="/src/api/resources/integrations/resources/dispatchMe/client/Client.ts">getCustomers</a>() -> Keet.GetCustomersResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.dispatchMe.getCustomers();
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

**requestOptions:** `DispatchMe.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.dispatchMe.<a href="/src/api/resources/integrations/resources/dispatchMe/client/Client.ts">getAccountOrganizations</a>() -> Keet.GetAccountOrganizationsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.dispatchMe.getAccountOrganizations();
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

**requestOptions:** `DispatchMe.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.dispatchMe.<a href="/src/api/resources/integrations/resources/dispatchMe/client/Client.ts">getJobs</a>({ ...params }) -> Keet.GetJobsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.dispatchMe.getJobs({
    organizationId: "string",
    limit: 1,
    status: Keet.DispatchMeJobStatus.Offered,
    offset: 1,
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

**request:** `Keet.integrations.GetJobs`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DispatchMe.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.dispatchMe.<a href="/src/api/resources/integrations/resources/dispatchMe/client/Client.ts">getUsers</a>({ ...params }) -> Keet.GetDispatchMeUsersResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.dispatchMe.getUsers({
    limit: 1,
    offset: 1,
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

**request:** `Keet.integrations.GetDispatchMeUsers`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DispatchMe.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.dispatchMe.<a href="/src/api/resources/integrations/resources/dispatchMe/client/Client.ts">createAppointment</a>({ ...params }) -> Keet.CreateDispatchMeAppointmentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.dispatchMe.createAppointment({
    appointment: {
        duration: 1,
        time: "string",
        userId: 1,
        secondaryUserIds: [1],
        type: "string",
        organizationId: 1,
        jobId: 1,
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

**request:** `Keet.integrations.CreateDispatchMeAppointment`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DispatchMe.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.dispatchMe.<a href="/src/api/resources/integrations/resources/dispatchMe/client/Client.ts">createNote</a>({ ...params }) -> Keet.CreateDispatchMeNoteResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.dispatchMe.createNote({
    note: {
        jobId: 1,
        description: "string",
        private: true,
        priority: true,
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

**request:** `Keet.integrations.CreateDispatchMeNote`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DispatchMe.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Integrations Facebook

<details><summary><code>client.integrations.facebook.<a href="/src/api/resources/integrations/resources/facebook/client/Client.ts">createSession</a>() -> Keet.CreateSessionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Facebook session that you can connect to via playwright. See [this link](/overview/integrations/custom-automations) for more info.

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
await client.integrations.facebook.createSession();
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

**requestOptions:** `Facebook.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.facebook.<a href="/src/api/resources/integrations/resources/facebook/client/Client.ts">postGroupMessage</a>(groupId, { ...params }) -> Keet.PostGroupMessageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Post a message to a group

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
await client.integrations.facebook.postGroupMessage("string", {
    message: "string",
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

**groupId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Keet.integrations.PostGroupMessage`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Facebook.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.facebook.<a href="/src/api/resources/integrations/resources/facebook/client/Client.ts">joinGroup</a>(groupId) -> Keet.JoinGroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Join a group

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
await client.integrations.facebook.joinGroup("string");
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

**groupId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Facebook.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.facebook.<a href="/src/api/resources/integrations/resources/facebook/client/Client.ts">searchGroups</a>({ ...params }) -> Keet.SearchGroupsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search for groups

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
await client.integrations.facebook.searchGroups({
    query: "string",
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

**request:** `Keet.integrations.SearchGroups`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Facebook.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Integrations Instagram

<details><summary><code>client.integrations.instagram.<a href="/src/api/resources/integrations/resources/instagram/client/Client.ts">createSession</a>() -> Keet.CreateSessionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Instagram session that you can connect to via playwright. See [this link](/overview/integrations/custom-automations) for more info.

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
await client.integrations.instagram.createSession();
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

**requestOptions:** `Instagram.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Integrations Linkedin

<details><summary><code>client.integrations.linkedin.<a href="/src/api/resources/integrations/resources/linkedin/client/Client.ts">createSession</a>() -> Keet.CreateSessionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a LinkedIn session that you can connect to via playwright. See [this link](/overview/integrations/custom-automations) for more info.

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
await client.integrations.linkedin.createSession();
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

**requestOptions:** `Linkedin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.linkedin.<a href="/src/api/resources/integrations/resources/linkedin/client/Client.ts">getConnectionInvitations</a>() -> Keet.InvitationRequestsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get your the list of pending LinkedIn connection requests.

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
await client.integrations.linkedin.getConnectionInvitations();
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

**requestOptions:** `Linkedin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.linkedin.<a href="/src/api/resources/integrations/resources/linkedin/client/Client.ts">acceptConnectionInvitation</a>({ ...params }) -> Keet.AcceptInvitationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Accept a LinkedIn connection invitation

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
await client.integrations.linkedin.acceptConnectionInvitation({
    profileUrl: "string",
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

**request:** `Keet.integrations.AcceptConnectionInvitation`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Linkedin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.linkedin.<a href="/src/api/resources/integrations/resources/linkedin/client/Client.ts">createPost</a>({ ...params }) -> Keet.CreatePostResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new LinkedIn post

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
await client.integrations.linkedin.createPost({
    content: "string",
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

**request:** `Keet.integrations.CreatePost`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Linkedin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.linkedin.<a href="/src/api/resources/integrations/resources/linkedin/client/Client.ts">search</a>({ ...params }) -> Keet.SearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search for people on LinkedIn

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
await client.integrations.linkedin.search({
    firstName: "string",
    lastName: "string",
    limit: "string",
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

**request:** `Keet.integrations.Search`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Linkedin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.linkedin.<a href="/src/api/resources/integrations/resources/linkedin/client/Client.ts">getConnections</a>({ ...params }) -> Keet.GetConnectionsResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get your LinkedIn connections

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
await client.integrations.linkedin.getConnections({
    limit: "string",
    offset: "string",
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

**request:** `Keet.integrations.GetConnections`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Linkedin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.linkedin.<a href="/src/api/resources/integrations/resources/linkedin/client/Client.ts">sendMessage</a>({ ...params }) -> Keet.LinkedInSendMessageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send a LinkedIn message

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
await client.integrations.linkedin.sendMessage({
    to: "string",
    content: "string",
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

**request:** `Keet.integrations.SendMessage`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Linkedin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.linkedin.<a href="/src/api/resources/integrations/resources/linkedin/client/Client.ts">getMessages</a>(profileName, { ...params }) -> Keet.LinkedInGetMessagesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get your LinkedIn messages

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
await client.integrations.linkedin.getMessages("string", {
    limit: "string",
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

**profileName:** `string` — The profile name of the person to get the messages from. For example for the account with the url "https://www.linkedin.com/in/zacharyashen/" the profile name would be "zacharyashen"

</dd>
</dl>

<dl>
<dd>

**request:** `Keet.integrations.GetMessages`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Linkedin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Integrations Ppp

<details><summary><code>client.integrations.ppp.<a href="/src/api/resources/integrations/resources/ppp/client/Client.ts">createSession</a>() -> Keet.CreateSessionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a perfect pricing session that you can connect to via playwright. See [this link](/overview/integrations/custom-automations) for more info.

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
await client.integrations.ppp.createSession();
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

**requestOptions:** `Ppp.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.ppp.<a href="/src/api/resources/integrations/resources/ppp/client/Client.ts">createCustomer</a>({ ...params }) -> Keet.CreateCustomerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a perfect pricing customer

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
await client.integrations.ppp.createCustomer({
    firstName: "string",
    lastName: "string",
    companyName: "string",
    primaryPhoneType: Keet.PhoneType.Home,
    primaryPhone: "string",
    primaryPhoneLabel: "string",
    primaryEmailType: Keet.EmailType.Work,
    primaryEmail: "string",
    commPreferences: Keet.CommPreferences.None,
    billingTerm: "string",
    leadSource: "string",
    customerType: "string",
    comments: "string",
    invoiceType: "string",
    billingLocationName: "string",
    billingStreet1: "string",
    billingStreet2: "string",
    billingCity: "string",
    billingState: "string",
    billingZip: "string",
    billingComments: "string",
    primaryLocationName: "string",
    primaryStreet1: "string",
    primaryStreet2: "string",
    primaryCity: "string",
    primaryState: "string",
    primaryZip: "string",
    salesTax: "string",
    primaryComments: "string",
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

**request:** `Keet.Customer`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ppp.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.ppp.<a href="/src/api/resources/integrations/resources/ppp/client/Client.ts">searchCustomerDetails</a>({ ...params }) -> Keet.SearchCustomerDetailsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search for perfect pricing customer

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
await client.integrations.ppp.searchCustomerDetails({
    firstName: "string",
    lastName: "string",
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

**request:** `Keet.integrations.SearchCustomer`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ppp.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.ppp.<a href="/src/api/resources/integrations/resources/ppp/client/Client.ts">createAppointment</a>({ ...params }) -> Keet.CreateAppointmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a perfect pricing appointment

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
await client.integrations.ppp.createAppointment({
    firstName: "string",
    lastName: "string",
    serviceCallRequest: {
        locationContactInfoId: "string",
        appointmentType: Keet.AppointmentType.Scheduled,
        openServiceCallDate: "string",
        serviceCallTypeId: 1,
        hours: "string",
        minutes: "string",
        arrivalWindow: "string",
        diagnosticFee: 1.1,
        serviceCallStatus: "string",
        leadSourceId: 1,
        poNumber: "string",
        description: "string",
        notes: "string",
        datepicker1: "string",
        dispatchBoardId: 1,
        callTypeId: "string",
        startTime: "string",
        endTime: "string",
        date: "string",
        technicianId: 1,
        sendEmail: 1,
        doNotEmail: 1,
        arrivalWindowId: 1,
        id: "string",
        newCustomer: 1,
        customerFirstName: "string",
        customerLastName: "string",
        customerCompanyName: "string",
        customerFullName: "string",
        newServiceCallDefLeadSourId: 1,
        appointmentSaveFrom: "string",
        selectedMultiTechSameCall: [
            {
                techId: "string",
                startTime: "string",
                endTime: "string",
            },
        ],
        primaryOpenCallTech: "string",
        selectedMultiTechSameCallOrNot: Keet.MultiTechOrNot.AddNewTechnician,
        isMultipleTech: "string",
        isPrimaryTechId: 1,
        isPrimaryTech: "string",
        isSecondaryServiceCallData: 1,
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

**request:** `Keet.integrations.CreateAppointment`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ppp.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.ppp.<a href="/src/api/resources/integrations/resources/ppp/client/Client.ts">getBillingTerms</a>() -> Keet.GetBillingTermsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get perfect pricing billing terms

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
await client.integrations.ppp.getBillingTerms();
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

**requestOptions:** `Ppp.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.ppp.<a href="/src/api/resources/integrations/resources/ppp/client/Client.ts">getInvoiceTypes</a>() -> Keet.GetInvoiceTypesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get perfect pricing invoice types

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
await client.integrations.ppp.getInvoiceTypes();
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

**requestOptions:** `Ppp.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.ppp.<a href="/src/api/resources/integrations/resources/ppp/client/Client.ts">getCustomerTypes</a>() -> Keet.GetCustomerTypesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get perfect pricing customer types

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
await client.integrations.ppp.getCustomerTypes();
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

**requestOptions:** `Ppp.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.ppp.<a href="/src/api/resources/integrations/resources/ppp/client/Client.ts">getArrivalWindow</a>() -> Keet.GetArrivalWindowResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get perfect pricing arrival window

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
await client.integrations.ppp.getArrivalWindow();
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

**requestOptions:** `Ppp.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.ppp.<a href="/src/api/resources/integrations/resources/ppp/client/Client.ts">getServiceCallType</a>() -> Keet.GetServiceCallTypeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get perfect pricing service call type

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
await client.integrations.ppp.getServiceCallType();
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

**requestOptions:** `Ppp.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.ppp.<a href="/src/api/resources/integrations/resources/ppp/client/Client.ts">getDiagnosticFee</a>() -> Keet.GetDiagnosticFeeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get perfect pricing diagnostic fee

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
await client.integrations.ppp.getDiagnosticFee();
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

**requestOptions:** `Ppp.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.ppp.<a href="/src/api/resources/integrations/resources/ppp/client/Client.ts">getServiceCallStatus</a>() -> Keet.GetServiceCallStatusResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get perfect pricing service call status

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
await client.integrations.ppp.getServiceCallStatus();
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

**requestOptions:** `Ppp.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.ppp.<a href="/src/api/resources/integrations/resources/ppp/client/Client.ts">getLeadSource</a>() -> Keet.GetLeadSourceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get perfect pricing lead source

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
await client.integrations.ppp.getLeadSource();
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

**requestOptions:** `Ppp.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.ppp.<a href="/src/api/resources/integrations/resources/ppp/client/Client.ts">getBoardIds</a>() -> Keet.GetBoardIdsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get perfect pricing board ids

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
await client.integrations.ppp.getBoardIds();
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

**requestOptions:** `Ppp.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.ppp.<a href="/src/api/resources/integrations/resources/ppp/client/Client.ts">getTechnicians</a>() -> Keet.GetTechniciansResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get perfect pricing technicians

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
await client.integrations.ppp.getTechnicians();
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

**requestOptions:** `Ppp.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.ppp.<a href="/src/api/resources/integrations/resources/ppp/client/Client.ts">getCalendar</a>({ ...params }) -> Keet.GetCalendarResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get perfect pricing calendar

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
await client.integrations.ppp.getCalendar({
    boardId: "string",
    date: "string",
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

**request:** `Keet.integrations.GetCalendar`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ppp.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Integrations Servicebox

<details><summary><code>client.integrations.servicebox.<a href="/src/api/resources/integrations/resources/servicebox/client/Client.ts">createSession</a>() -> Keet.CreateSessionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Service Box session that you can connect to via playwright. See [this link](/overview/integrations/custom-automations) for more info.

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
await client.integrations.servicebox.createSession();
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

**requestOptions:** `Servicebox.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.servicebox.<a href="/src/api/resources/integrations/resources/servicebox/client/Client.ts">getReceptionnaires</a>({ ...params }) -> Keet.ReceptionnairesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the list of receptionnaires associated with this account

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
await client.integrations.servicebox.getReceptionnaires({
    equipe: "string",
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

**request:** `Keet.integrations.GetServiceBoxReceptionnaires`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Servicebox.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.servicebox.<a href="/src/api/resources/integrations/resources/servicebox/client/Client.ts">getEquippes</a>() -> Keet.EquippesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the list of equippes associated with this account

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
await client.integrations.servicebox.getEquippes();
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

**requestOptions:** `Servicebox.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.servicebox.<a href="/src/api/resources/integrations/resources/servicebox/client/Client.ts">getBarGraph</a>({ ...params }) -> Keet.BarGraphResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a bar graph of the number of events in each location

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
await client.integrations.servicebox.getBarGraph({
    date: "string",
    equipe: "string",
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

**request:** `Keet.integrations.GetServiceBoxBarGraph`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Servicebox.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.servicebox.<a href="/src/api/resources/integrations/resources/servicebox/client/Client.ts">getCalendar</a>({ ...params }) -> Keet.CalendarResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the calendar

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
await client.integrations.servicebox.getCalendar({
    date: "string",
    receptionnnaire: "string",
    equipe: "string",
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

**request:** `Keet.integrations.GetServiceBoxCalendar`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Servicebox.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Integrations Toast

<details><summary><code>client.integrations.toast.<a href="/src/api/resources/integrations/resources/toast/client/Client.ts">createSession</a>() -> Keet.CreateSessionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Toast session that you can connect to via playwright. See [this link](/overview/integrations/custom-automations) for more info.

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
await client.integrations.toast.createSession();
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

**requestOptions:** `Toast.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.toast.<a href="/src/api/resources/integrations/resources/toast/client/Client.ts">getMenu</a>() -> Keet.GetMenusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.toast.getMenu();
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

**requestOptions:** `Toast.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Integrations Uber

<details><summary><code>client.integrations.uber.<a href="/src/api/resources/integrations/resources/uber/client/Client.ts">createSession</a>() -> Keet.CreateSessionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Uber session that you can connect to via playwright. See [this link](/overview/integrations/custom-automations) for more info.

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
await client.integrations.uber.createSession();
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

**requestOptions:** `Uber.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.uber.<a href="/src/api/resources/integrations/resources/uber/client/Client.ts">orderRide</a>({ ...params }) -> Keet.OrderRideResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.uber.orderRide({
    origin: {
        addressLine1: "string",
        addressLine2: "string",
    },
    destination: {
        addressLine1: "string",
        addressLine2: "string",
    },
    carType: Keet.UberCarTypes.UberX,
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

**request:** `Keet.integrations.OrderRide`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Uber.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Integrations Venmo

<details><summary><code>client.integrations.venmo.<a href="/src/api/resources/integrations/resources/venmo/client/Client.ts">createSession</a>() -> Keet.CreateSessionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Venmo session that you can connect to via playwright. See [this link](/overview/integrations/custom-automations) for more info.

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
await client.integrations.venmo.createSession();
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

**requestOptions:** `Venmo.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.venmo.<a href="/src/api/resources/integrations/resources/venmo/client/Client.ts">getTransactions</a>() -> Keet.GetTransactionsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.venmo.getTransactions();
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

**requestOptions:** `Venmo.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Integrations Vin

<details><summary><code>client.integrations.vin.<a href="/src/api/resources/integrations/resources/vin/client/Client.ts">createSession</a>() -> Keet.CreateSessionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Vin session that you can connect to via playwright. See [this link](/overview/integrations/custom-automations) for more info.

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
await client.integrations.vin.createSession();
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

**requestOptions:** `Vin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

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
    leadId: "string",
    customerId: "string",
    dealerId: "string",
    description: "string",
    endDate: "string",
    startDate: "string",
    assignedUserId: "string",
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

**request:** `Keet.integrations.CreateVinAppointmentRequest`

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
    date: "string",
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

**request:** `Keet.integrations.GetVinAppointmentsRequest`

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

<details><summary><code>client.integrations.vin.<a href="/src/api/resources/integrations/resources/vin/client/Client.ts">getUsers</a>() -> Keet.GetUsersResponse</code></summary>
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
await client.integrations.vin.getUsers();
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

**requestOptions:** `Vin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.vin.<a href="/src/api/resources/integrations/resources/vin/client/Client.ts">getDealers</a>() -> Keet.GetVinDealersResponse</code></summary>
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
await client.integrations.vin.getDealers();
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
    firstName: "string",
    lastName: "string",
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

**request:** `Keet.integrations.SearchCustomersRequest`

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
    dealerId: "string",
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

**request:** `Keet.integrations.GetVinVehiclesRequest`

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
    customer: {
        homePhone: "string",
        workPhone: "string",
        cellPhone: "string",
        firstName: "string",
        middleName: "string",
        lastName: "string",
        email: "string",
        vehicleNumber: "string",
    },
    dealerId: "string",
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

**request:** `Keet.integrations.CreateVinCustomer`

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

## Integrations Whatsapp

<details><summary><code>client.integrations.whatsapp.<a href="/src/api/resources/integrations/resources/whatsapp/client/Client.ts">createSession</a>() -> Keet.CreateSessionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a WhatsApp session that you can connect to via playwright. See [this link](/overview/integrations/custom-automations) for more info.

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
await client.integrations.whatsapp.createSession();
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

**requestOptions:** `Whatsapp.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.whatsapp.<a href="/src/api/resources/integrations/resources/whatsapp/client/Client.ts">sendMessage</a>({ ...params }) -> Keet.SendMessageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send a message to a WhatsApp number.

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
await client.integrations.whatsapp.sendMessage({
    to: "string",
    message: "string",
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

**request:** `Keet.integrations.SendMessageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Whatsapp.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.whatsapp.<a href="/src/api/resources/integrations/resources/whatsapp/client/Client.ts">changeStatus</a>({ ...params }) -> Keet.ChangeStatusResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Change the status on WhatsApp. Text only supported

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
await client.integrations.whatsapp.changeStatus({
    statusMessage: "string",
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

**request:** `Keet.integrations.ChangeStatusRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Whatsapp.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.whatsapp.<a href="/src/api/resources/integrations/resources/whatsapp/client/Client.ts">readMessages</a>(phoneNumber) -> Keet.ReadMessagesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Read messages from WhatsApp

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
await client.integrations.whatsapp.readMessages("string");
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

**phoneNumber:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Whatsapp.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Integrations X

<details><summary><code>client.integrations.x.<a href="/src/api/resources/integrations/resources/x/client/Client.ts">createSession</a>() -> Keet.CreateSessionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a X session that you can connect to via playwright. See [this link](/overview/integrations/custom-automations) for more info.

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
await client.integrations.x.createSession();
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

**requestOptions:** `X.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.x.<a href="/src/api/resources/integrations/resources/x/client/Client.ts">getFollowers</a>({ ...params }) -> Keet.GetXFollowersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the list of followers associated with this account

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
await client.integrations.x.getFollowers({
    limit: 1,
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

**request:** `Keet.integrations.GetXFollowers`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `X.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.x.<a href="/src/api/resources/integrations/resources/x/client/Client.ts">getFollowingTweets</a>({ ...params }) -> Keet.GetXFollowingTweetsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the latest tweets from the accounts you follow

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
await client.integrations.x.getFollowingTweets({
    limit: 1,
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

**request:** `Keet.integrations.GetXFollowingPosts`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `X.RequestOptions`

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
        integration: Keet.OfferedIntegrations.Instagram,
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
await client.linkedAccounts.getLinkedAccount("string");
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
await client.linkedAccounts.deleteLinkedAccount("string");
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
