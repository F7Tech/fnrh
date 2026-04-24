Quero implementar no site fnrh.fisamtech.com o Meta/Facebook Pixel da forma mais simples, segura e funcional possível, considerando que o projeto usa apenas HTML, CSS e JavaScript puro.

## Importante

Não implementar Conversions API agora.
Não usar access token no front-end.
Quero apenas o Meta Pixel no navegador.

## Objetivo

Preparar o site para rodar tráfego pago no Facebook/Instagram Ads com rastreamento básico e confiável dos eventos principais.

## Implementação desejada

1. Inserir o Meta Pixel base code no `<head>` da landing page.
2. Criar uma variável fácil de editar para o Pixel ID, algo como:
   `const META_PIXEL_ID = 'COLOCAR_PIXEL_ID_AQUI';`

   E utilize esse codigo que veio do facebook 

   <!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2418057512032765');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=2418057512032765&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->

3. Garantir disparo de `PageView` no carregamento da página.
4. Rastrear os principais cliques com eventos do Meta Pixel:

   * `Lead` no CTA principal da landing
   * `Contact` em todos os botões ou links de WhatsApp
5. Evitar código duplicado ou eventos disparando duas vezes.
6. Não quebrar o layout nem a performance.
7. Deixar o código limpo, comentado e fácil de manter.

## Mapeamento de eventos

### PageView

Disparar no carregamento da página.

### Lead

Disparar apenas em cliques com intenção comercial real, como:

* botão principal do hero
* botão “Pedir diagnóstico”
* principal CTA de contato

### Contact

Disparar em todos os links de WhatsApp, como:

* botão flutuante
* botão de rodapé
* links `wa.me` ou `api.whatsapp.com`

## Estrutura técnica

Se fizer sentido, centralizar a lógica em um arquivo como `tracking.js`, com funções como:

* `trackLead()`
* `trackContact()`

Antes de chamar `fbq`, validar se ele existe.

## HTML

Se necessário, adicionar atributos como:

* `data-track="lead"`
* `data-track="contact"`
* `data-track="whatsapp"`

Use seletores robustos e fáceis de manter.

## Entregas

Depois de implementar, mostrar:

1. arquivos alterados
2. onde trocar o Pixel ID
3. quais eventos foram implementados
4. como testar com Meta Pixel Helper
5. como validar no Events Manager / Test Events

## Qualidade

Quero implementação simples, profissional e pronta para campanha.
Sem Conversions API por enquanto.
Sem token exposto.
Sem gambiarra.
