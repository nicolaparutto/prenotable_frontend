import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function HomeSwiper() {
	return (
		<>
			<div className='text-center pt-[20px] pb-[15px]'>
				<h4 className='text-sm text-gray'>Come Funziona?</h4>
				<h2 className='text-xl font-title text-yellow'>È molto semplice!</h2>
			</div>
			<Swiper pagination={true} modules={[Pagination]} className="mySwiper">
				<SwiperSlide>
					<div className='text-center pb-10 mb-5'>
						<div className='text-yellow text-[50px]'>
							<i class="fa-solid fa-location-dot"></i>
						</div>
						<h3 className='text-lg'>Scegli la regione o la città</h3>
						<p className='text-sm text-gray'>Ti mostreremo i locali e i ristoranti della zona indicata.</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='text-center pb-10 mb-5'>
						<div className='text-yellow text-[50px]'>
							<i class="fa-solid fa-utensils"></i>
						</div>
						<h3 className='text-lg'>Scegli quello che desideri</h3>
						<p className='text-sm text-gray'>Sfoglia i ristoranti, in base alle tue preferenze.</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='text-center pb-10 mb-5'>
						<div className='text-yellow text-[50px]'>
							<i class="fa-solid fa-calendar-check"></i>
						</div>
						<h3 className='text-lg'>Prenota il tuo tavolo</h3>
						<p className='text-sm text-gray'>Prenota direttamente qui, se è disponibile.</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	)
}

export default HomeSwiper