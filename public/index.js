import Tabs from './tabs.js';
import data from './data.json' assert { type: "json" };

console.log(data);

const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');
const dailyContent = document.getElementById('daily-content');
const weeklyContent = document.getElementById('weekly-content');
const monthlyContent = document.getElementById('monthly-content');
// console.log(monthly);

const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

monthlyContent.innerHTML = data.map(item=>{
	return `    <article class= "${item.class} rounded-2xl  duration-300 ease-out cursor-pointer
                         lg:h-52  2xl:h-52 w-full  2xl:w-60" style="background:${item.color}">
                            <div class="h-10 flex justify-end bg-no-repeat ${item.class}" style="background-image: url(${item.img});
                             background-position: 92% 35%; ">
                            </div>
                            <div class="bg-myBlue-200 hover:bg-myBlue-400 h-52 rounded-2xl h-48 w-full 2xl:w-60 z-50">
                                <ul class="flex justify-between px-6 pt-8 pb-4 2xl:px-6 2xl:pt-8 2xl:pb-4">
                                    <li>${item.title}</li>
                                    <li class="flex items-center justify-center cursor-pointer hover:animate-pulse transition ease-out hover:text-red-500">
                                        <div class="flex">
                                            <div class="h-1 w-1 mr-0.5 bg-slate-50 rounded-full"></div>
                                            <div class="h-1 w-1 mr-0.5 bg-slate-50 rounded-full"></div>
                                            <div class="h-1 w-1  bg-slate-50 rounded-full"></div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="flex flex-row justify-between md:flex-col ">
                                    <p class="px-6 py-4 2xl:py-2 2xl:px-6 text-2xl 2xl:text-5xl font-thin">
                                        ${item.timeframes.monthly.current}<span>hrs</span></p>
                                    <p class="px-6 py-4 2xl:px-6 2xl:pt-0 2xl:pb-1 2xl:px-6 text-base flex items-center justify-center
                                        md:block">Last week - ${item.timeframes.monthly.previous}hrs</p>
                                </div>
                            </div>
                        </article>
`
}).join(' ');
weeklyContent.innerHTML = data.map(item=>{
	return `    <article class= "${item.class} rounded-2xl  duration-300 ease-out cursor-pointer
                         lg:h-52  2xl:h-52 w-full  2xl:w-60" style="background:${item.color}">
                            <div class="h-10 flex justify-end bg-no-repeat ${item.class}" style="background-image: url(${item.img});
                             background-position: 92% 35%; ">
                            </div>
                            <div class="bg-myBlue-200 hover:bg-myBlue-400 h-52 rounded-2xl h-48 w-full 2xl:w-60 z-50">
                                <ul class="flex justify-between px-6 pt-8 pb-4 2xl:px-6 2xl:pt-8 2xl:pb-4">
                                    <li>${item.title}</li>
                                    <li class="flex items-center justify-center cursor-pointer hover:animate-pulse transition ease-out hover:text-red-500">
                                        <div class="flex">
                                            <div class="h-1 w-1 mr-0.5 bg-slate-50 rounded-full"></div>
                                            <div class="h-1 w-1 mr-0.5 bg-slate-50 rounded-full"></div>
                                            <div class="h-1 w-1  bg-slate-50 rounded-full"></div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="flex flex-row justify-between md:flex-col ">
                                    <p class="px-6 py-4 2xl:py-2 2xl:px-6 text-2xl 2xl:text-5xl font-thin">
                                        ${item.timeframes.weekly.current}<span>hrs</span></p>
                                    <p class="px-6 py-4  2xl:px-6 2xl:pt-0 2xl:pb-1 2xl:px-6 text-base flex items-center justify-center
                                        md:block">Last week - ${item.timeframes.weekly.previous}hrs</p>
                                </div>
                            </div>
                        </article>
`
}).join(' ');
dailyContent.innerHTML = data.map(item=>{
	return `    <article class= "${item.class} rounded-2xl  duration-300 ease-out cursor-pointer
                         lg:h-52  2xl:h-52 w-full  2xl:w-60" style="background:${item.color}">
                            <div class="h-10 flex justify-end bg-no-repeat ${item.class}" style="background-image: url(${item.img});
                             background-position: 92% 35%; ">
                            </div>
                            <div class="bg-myBlue-200 hover:bg-myBlue-400 h-52 rounded-2xl h-48 w-full 2xl:w-60 z-50">
                                <ul class="flex justify-between px-6 pt-8 pb-4 2xl:px-6 2xl:pt-8 2xl:pb-4">
                                    <li>${item.title}</li>
                                    <li class="flex items-center justify-center cursor-pointer hover:animate-pulse transition ease-out hover:text-red-500">
                                        <div class="flex">
                                            <div class="h-1 w-1 mr-0.5 bg-slate-50 rounded-full"></div>
                                            <div class="h-1 w-1 mr-0.5 bg-slate-50 rounded-full"></div>
                                            <div class="h-1 w-1  bg-slate-50 rounded-full"></div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="flex flex-row justify-between md:flex-col ">
                                    <p class="px-6 py-4 2xl:py-2 2xl:px-6 text-2xl 2xl:text-5xl font-thin">
                                        ${item.timeframes.daily.current}<span>hrs</span></p>
                                    <p class="px-6 py-4 2xl:px-6 2xl:pt-0 2xl:pb-1 2xl:px-6 text-base flex items-center justify-center
                                        md:block">Last week - ${item.timeframes.daily.previous}hrs</p>
                                </div>
                            </div>
                        </article>
`
}).join(' ');
