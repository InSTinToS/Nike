/* eslint-disable @next/next/no-img-element */
import { FooterStyle } from './styles'
import { HelpLinks, OtherLinks } from './styles'

const helpLinks = [
  'Dúvidas Gerais',
  'Encontre seu Tamanho',
  'Entregas',
  'Pedidos',
  'Devoluções',
  'Editar Consentimento',
  'Preferências de Cookie',
  'Pagamentos',
  'Produtos',
  'Corporativo',
  'Fale Conosco'
]

const otherLinks = [
  ['Ofertas', 'Últimas unidades', 'Masculino', 'Feminino', 'Infantil'],
  ['Calçados', 'Casual', 'Corrida', 'Chuteiras', 'Basquete'],
  ['Roupas', 'Tops', 'Camisetas', 'Shorts', 'Camisas de Times'],
  ['Acessórios', 'Bonés & Viseiras', 'Bolsas & Mochilas', 'Bolas', 'Meias'],
  [
    'Destaques',
    'Lançamentos',
    'Exclusivo Membros',
    'Coleção Unissex',
    'Guia de Tops'
  ]
]

const Footer = () => (
  <FooterStyle>
    <OtherLinks>
      {otherLinks.map((items, index) => (
        <ul key={index}>
          {items.map((item, index) => (
            <li key={item}>{index !== 0 ? <a>{item}</a> : <b>{item}</b>}</li>
          ))}
        </ul>
      ))}
    </OtherLinks>

    <HelpLinks>
      <ul>
        <li>
          <a>
            <b>ENCONTRE UMA LOJA NIKE</b>
          </a>
        </li>

        <li>
          <a>
            <b>CADASTRE-SE PARA RECEBER NOVIDADES</b>
          </a>
        </li>

        <li>
          <a>
            <b>NIKE JOURNAL</b>
          </a>
        </li>

        <li>
          <a>
            <b>MAPA DO SITE</b>
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <b>AJUDA</b>
        </li>

        {helpLinks.map(item => (
          <li key={item}>
            <a>{item}</a>
          </li>
        ))}
      </ul>

      <ul>
        <li>
          <b>SOBRE A NIKE</b>
        </li>

        <li>
          <a>Feito pra Jogar</a>
        </li>

        <li>
          <a>Sustentabilidade</a>
        </li>
      </ul>

      <aside>
        <b>REDES SOCIAIS</b>

        <ul>
          <li>
            <a>
              <img
                alt=''
                src='https://images.lojanike.com.br/site/ni/icones/facebook.svg'
              />
            </a>
          </li>

          <li>
            <a>
              <img
                alt=''
                src='https://images.lojanike.com.br/site/ni/icones/youtube.svg'
              />
            </a>
          </li>

          <li>
            <a>
              <img
                alt=''
                src='https://images.lojanike.com.br/site/ni/icones/instagram.svg'
              />
            </a>
          </li>
        </ul>
      </aside>
    </HelpLinks>
  </FooterStyle>
)

export default Footer
