# Reference

## Integrations AmazonBusiness

<details><summary><code>client.integrations.amazonBusiness.<a href="/src/api/resources/integrations/resources/amazonBusiness/client/Client.ts">createSession</a>({ ...params }) -> Keet.CreateSessionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.amazonBusiness.createSession({
    xAccountToken: "string",
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

**request:** `Keet.integrations.CreateAmazonBusinessSession`

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

<details><summary><code>client.integrations.amazonBusiness.<a href="/src/api/resources/integrations/resources/amazonBusiness/client/Client.ts">getOrders</a>({ ...params }) -> Keet.GetOrdersResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.amazonBusiness.getOrders({
    xAccountToken: "string",
    page: 1,
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

## Integrations Venmo

<details><summary><code>client.integrations.venmo.<a href="/src/api/resources/integrations/resources/venmo/client/Client.ts">createSession</a>({ ...params }) -> Keet.CreateSessionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.venmo.createSession({
    xAccountToken: "string",
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

**request:** `Keet.integrations.CreateVenmoSession`

</dd>
</dl>

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

<details><summary><code>client.integrations.venmo.<a href="/src/api/resources/integrations/resources/venmo/client/Client.ts">makePayment</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Make a payment to a user in Venmo

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
await client.integrations.venmo.makePayment({
    xAccountToken: "string",
    amount: 1,
    description: "string",
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

**request:** `Keet.integrations.MakePaymentRequest`

</dd>
</dl>

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

<details><summary><code>client.integrations.venmo.<a href="/src/api/resources/integrations/resources/venmo/client/Client.ts">getTransactions</a>({ ...params }) -> Keet.GetTransactionsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.venmo.getTransactions({
    xAccountToken: "string",
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

**request:** `Keet.integrations.GetTransactionsRequest`

</dd>
</dl>

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

## LinkedAccounts

<details><summary><code>client.linkedAccounts.<a href="/src/api/resources/linkedAccounts/client/Client.ts">getLinkedAccount</a>(linkedAccountId, { ...params }) -> Keet.GetLinkedAccountResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.linkedAccounts.getLinkedAccount("string", {
    xAccountToken: "string",
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

**linkedAccountId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Keet.GetLinkedAccountRequest`

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

<details><summary><code>client.linkedAccounts.<a href="/src/api/resources/linkedAccounts/client/Client.ts">deleteLinkedAccount</a>(linkedAccountId, { ...params }) -> Keet.DeleteLinkedAccountResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.linkedAccounts.deleteLinkedAccount("string", {
    accountToken: "string",
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

**linkedAccountId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Keet.DeleteLinkedAccountRequest`

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
