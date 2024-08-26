# Reference

## Integrations AmazonBusiness

<details><summary><code>client.integrations.amazonBusiness.<a href="/src/api/resources/integrations/resources/amazonBusiness/client/Client.ts">createSession</a>() -> Keet.CreateSessionResponse</code></summary>
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
