export default function About({ $target }) {
  const $about = document.createElement('div')
  $target.appendChild($about)
  $about.className = 'about__container'

  const template = () => /*html */ `
        <div class="about__image-wrapper">
            <img class="about__image" src="./src/assets/Profile.jpg" />
        </div>
        <div class="about__content-wrapper">
            <h2 class="about__title"> 안녕하세요, 이지원 입니다! </h2>
        </div>
    `

  const render = () => {
    $about.innerHTML = template()
  }

  render()
}
