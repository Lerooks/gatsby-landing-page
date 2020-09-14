import React, { ReactElement } from 'react'
import * as S from './process-styles'

export default function Process(): ReactElement {
  return (
    <S.Process>
      <S.ProcessContainer>
        <S.Title> Como a Juno funciona? </S.Title>
        <S.List>
          <S.Item>
            Você se cadastra na Juno, emite cobranças e envia para seus clientes. É rápido e não precisa ter carteira de
            cobrança em nenhum banco.
          </S.Item>
          <S.Item>
            Seu cliente recebe a cobrança da maneira que você preferir e paga. A Juno cuida da conciliação bancária e da
            segurança das suas transações.
          </S.Item>
          <S.Item>
            O dinheiro cai na sua conta Juno e você pode usá-lo com seu cartão Juno, pagar contas ou transferir para uma
            conta bancária.
          </S.Item>
        </S.List>
      </S.ProcessContainer>
    </S.Process>
  )
}
