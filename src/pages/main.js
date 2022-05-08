export default function main({ $target }) {
  const $main = document.createElement('main')
  $target.appendChild($main)

  const template = () => `
        <section class="about"></section>
        <aside class="document-list"></aside>
    `
  const mounted = () => {}

  const render = () => {
    $main.innerHTML = template()
    mounted()
  }

  render()
}

/**
 * target의 innerHTML을 바꿀거냐?
 * 아니면 지금처럼 별도의 템플릿을 둘거냐
 *
 * target을 바꿔버리는건 안좋은것 같음.
 * 부모 컴포넌트의 내부에 영향을 미치니까, append 먼저하자
 */
