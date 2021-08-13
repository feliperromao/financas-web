# Usuario (user)
```json{
    "name": "string|required",
    "email": "string|email|unique",
    "password": "string|required|min=8",
    "active": "boolean|required|default=true",
    "licence_accepted": "boolean|required",
    "licence_accepted_at": "date|required",
    "license_id": "integer|required",
}
```

# Receitas (revenue)
```json{
    "name": "string|required",
    "value": "number|required"
}
```

# Conta (bill)
```json{
    "name": "string|required",
    "value": "number|required",
    "user_id": "string|required",
    "category_id": "string|required",
    "payment_day": "string|required",
    "repeat": "string|in:WEEKLY,MONTHLY,YEARLY"
}
```

# Pagamentos (payments)
```json{
    "name": "string|required",
    "status": "string|in:PENDING,PAID,CANCELED",
    "reference": "required|date|format:YYYY-MM",
    "bill_id": "string|required",
    "user_id": "string|required",
}
```

# Valores de Pagamentos (payment_values)
```json{
    "payment_id": "string|required",
    "description": "string",
    "value": "float|required",
    "payment_date": "date|required",
    "receipt": "string|nullable"
}
```

# Categoria (category)
```json{
    "name": "string|required",
    "user_id": "string|required"
}
```

# Licenças (licenses)
```json{
    "name": "string|required",
    "description":"string|required",
    "type":"in:FREE,PRO",
    "price": "number|required",
    "days":"number|required"
}
```