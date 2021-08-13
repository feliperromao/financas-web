# Financias Apps

## Requisitos funcionais

### Cadasstro
Este recurso tem como objetivo registrar um novo usuario na plataforma

- [ ] Validar campos obrigatórios
- [ ] Email deve ser valido
- [ ] Email deve ser único na plataforma
- [ ] Confirmação de senha e senha devem coincidir
- [ ] Enviar email de confirmação de cadastro

### Confirmar cadastro
Este recusso tem como objetivo confirmar um endereço de email do usuario fornecido pelo cadastro e ativar o usuario caso o email seja confirmado

-  [ ] Verificar validade do token
-  [ ] Ativar usuario

### Realizar login

- [ ] Verificar se usuario esta ativo
- [ ] Gerar token de autenticação

### Recuperar senha
Este recurso tem como objetivo gerar um token de redefinição de senha do usuario e enviar o mesmo por email

- [ ] Criar token de redefinição de senha
- [ ] Enviar token por email

### Redefinir senha
Este recurso tem como objetivo alterar a senha do usuario através de um token de redefinição de senha

- [ ] Verificar validade do token
- [ ] Confirmar senhas, senha e confirmação de senha devem coincidir
- [ ] Atualizar a senha do usuário
- [ ] Enviar e-mail informando que a senha foi atualizada


### Cadastro de Receitas
Este recurso tem como objetivo realizar o cadastro das receitas de um usuário

- [ ] Validar campos obrigatórios

### Cadastro de Contas

- [ ] Validar campos obrigatórios
- [ ] Configurar tipo de repetição da conta (`repeat`)
    - **WEEKLY**: informa que a conta será repetida semanalmente
        - `payment_day` deve ser um dia da semana com as seguintes opções: [*MONDAY*, *TUESDAY*, *WEDNESDAY*, *THURSDAY*, *FRIDAY*, *SATURDAY*, *SUNDAY*]

    - **MONTHLY**: informa que a conta será repetida mensalmente
        - `payment_day` deve conter um numero inteiro que representa o dia do mes a ser pago: [1-31]
        - Caso o mes vigente seja menor que o dia de pagamento da conta, a conta deve ser apresentada para pagamento no ultimo dia do mês

    - **YEARLY**: informa que a conta será repetida anualmente
        - `payment_day` deve ser o dia e mes de pagamento da conta no formato **DD-MM** por exemplo: [`30-01`]

### Lanças gastos do mês em categorias
    - Salvar comprovante de pagamento (Recibo, cupom fiscal, nota fiscal)
    - Gastos podem ser compostos por mais de um lançamento

### Pagar conta

### Relatório de despesas por periodo
- Detalhado
    - [FILTROS] Filtro de data
    - [FILTROS] Filtro de categoria
    - [FILTROS] Filtro de Descrição contendo ("%descrição%")
    - [INFO] Data da compra
    - [INFO] Valor
    - [INFO] Categoria
    - [INFO] Observação

- Simplificado


## Requisitos não funcionais

- Database: MongoDB
- Stack Backend:
    - Node js
- Stack frontend:
    - Next.js (React js)
- Mobile: React Native

