## Questões

### Questão 01

Uma empresa de transporte precisa calcular o valor final de uma entrega.

O programa deverá solicitar ao usuário:

- A distância da entrega em quilômetros.
- O peso total da encomenda em quilogramas.
- O tipo de entrega escolhido: `1` para normal, `2` para expressa ou `3` para entrega no mesmo dia.

Utilize a tabela abaixo para definir o valor por quilômetro:

| Tipo de entrega | Valor por km |
| --------------- | -----------: |
| Normal          |      R$ 1,20 |
| Expressa        |      R$ 1,80 |
| Mesmo dia       |      R$ 2,50 |

Além do valor por quilômetro, deverá ser cobrada uma taxa conforme o peso da encomenda:

- Até `5 kg`: sem taxa adicional.
- Acima de `5 kg` e até `15 kg`: taxa de `R$ 20,00`.
- Acima de `15 kg`: taxa de `R$ 45,00`.

Caso o valor da entrega ultrapasse `R$ 150,00`, o cliente receberá um desconto de `8%`.

Ao final, apresente:

- O valor calculado pela distância.
- A taxa adicional pelo peso.
- O desconto aplicado.
- O valor final da entrega.

---

### Questão 02

Uma academia precisa verificar a situação de pagamento e frequência de seus alunos.

O programa deverá solicitar:

- A quantidade de dias de atraso no pagamento.
- A quantidade de treinos realizados durante o mês.
- O tipo de plano: `1` para básico, `2` para intermediário ou `3` para premium.

Os valores mensais dos planos são:

| Plano         | Mensalidade |
| ------------- | ----------: |
| Básico        |    R$ 80,00 |
| Intermediário |   R$ 120,00 |
| Premium       |   R$ 180,00 |

Caso exista atraso no pagamento, deverá ser aplicada uma multa sobre o valor da mensalidade:

- Até `5` dias de atraso: multa de `2%`.
- De `6` até `15` dias de atraso: multa de `5%`.
- Mais de `15` dias de atraso: multa de `10%`.

A situação do aluno deverá ser definida da seguinte forma:

- Sem atraso: **Regular**
- Até `15` dias de atraso: **Pagamento pendente**
- Mais de `15` dias de atraso: **Acesso bloqueado**

Caso o aluno tenha realizado pelo menos `20` treinos no mês e não possua atraso, apresente também a mensagem: **Meta mensal atingida**.

Ao final, informe:

- O valor original da mensalidade.
- O valor da multa.
- O valor total a pagar.
- A situação do aluno.
- A mensagem de meta atingida, quando aplicável.

---

### Questão 03

Uma companhia de energia elétrica precisa calcular o valor da conta mensal de seus clientes.

O programa deverá solicitar:

- A quantidade de quilowatts-hora consumidos no mês.
- O tipo de imóvel: `1` para residencial ou `2` para comercial.
- Se a conta está sendo paga dentro do prazo: `1` para sim ou `2` para não.

Para imóveis residenciais, utilize as seguintes regras:

- Até `100 kWh`: R$ 0,65 por kWh.
- Acima de `100 kWh` e até `250 kWh`: R$ 0,80 por kWh.
- Acima de `250 kWh`: R$ 0,95 por kWh.

Para imóveis comerciais, utilize as seguintes regras:

- Até `200 kWh`: R$ 0,90 por kWh.
- Acima de `200 kWh`: R$ 1,10 por kWh.

Além do valor do consumo, deverá ser cobrada uma taxa fixa:

- Residencial: `R$ 18,00`.
- Comercial: `R$ 35,00`.

Caso o pagamento esteja atrasado, deverá ser aplicado um acréscimo de `6%` sobre o valor total da conta.

Ao final, informe:

- O valor referente ao consumo.
- A taxa fixa.
- O acréscimo por atraso.
- O valor final da conta.

---

### Questão 04

Uma empresa de turismo precisa calcular o valor final de um pacote de viagem.

O programa deverá solicitar:

- A quantidade de pessoas.
- A quantidade de dias da viagem.
- O destino escolhido: `1` para nacional, `2` para América do Sul ou `3` para internacional.
- Se o cliente deseja incluir seguro viagem: `1` para sim ou `2` para não.

O valor diário por pessoa deverá ser definido da seguinte forma:

| Destino        | Valor diário por pessoa |
| -------------- | ----------------------: |
| Nacional       |               R$ 180,00 |
| América do Sul |               R$ 320,00 |
| Internacional  |               R$ 550,00 |

Caso o seguro viagem seja contratado, deverá ser adicionado:

- `R$ 15,00` por dia para cada pessoa em viagens nacionais.
- `R$ 30,00` por dia para cada pessoa em viagens para a América do Sul.
- `R$ 55,00` por dia para cada pessoa em viagens internacionais.

Aplique os seguintes descontos:

- Viagens com mais de `4` pessoas: desconto de `7%`.
- Viagens com duração superior a `10` dias: desconto adicional de `5%`.

Os descontos deverão ser aplicados sobre o valor do pacote, sem considerar o valor do seguro.

Ao final, informe:

- O valor original do pacote.
- O valor do seguro.
- O desconto aplicado.
- O valor final da viagem.

---

### Questão 05

Uma loja deseja criar um programa para classificar seus vendedores de acordo com o desempenho mensal.

O programa deverá solicitar:

- A quantidade de vendas realizadas.
- O valor total vendido no mês.
- A quantidade de clientes que cancelaram a compra.
- A nota média recebida dos clientes, em uma escala de `0` até `10`.

A comissão deverá ser calculada conforme o valor total vendido:

- Até `R$ 5.000,00`: comissão de `2%`.
- Acima de `R$ 5.000,00` e até `R$ 15.000,00`: comissão de `4%`.
- Acima de `R$ 15.000,00`: comissão de `6%`.

Caso o vendedor tenha realizado mais de `30` vendas e possua nota média maior ou igual a `8`, receberá um bônus adicional de `R$ 300,00`.

Caso tenha ocorrido mais de `5` cancelamentos, deverá ser descontado `R$ 150,00` do valor total da comissão.

A classificação do vendedor deverá seguir as regras abaixo:

- Menos de `10` vendas: **Desempenho baixo**
- De `10` até `20` vendas: **Desempenho regular**
- De `21` até `30` vendas: **Bom desempenho**
- Mais de `30` vendas e nota menor que `8`: **Ótimo desempenho**
- Mais de `30` vendas e nota maior ou igual a `8`: **Vendedor destaque**

Ao final, informe:

- A quantidade de vendas.
- O valor total vendido.
- O valor inicial da comissão.
- O bônus recebido.
- O desconto por cancelamentos.
- O valor final da comissão.
- A classificação do vendedor.
