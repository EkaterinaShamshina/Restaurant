import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './styles/main.scss'

import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

// eslint-disable-next-line no-unused-vars
var swiper = new Swiper('.testimonialsSwiper', {
  slidesPerView: 2.77,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  modules: [Navigation, Pagination],
})
