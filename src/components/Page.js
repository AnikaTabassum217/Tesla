
import React from "react";

import myImage from '../images/car1.jpeg';

const Page=()=>{

  
  return(
      <div>  
            <div>          
          
             <div  className="relative bg-cover bg-center h-screen  mx-auto" 
                   style={{
                    backgroundImage: `url(${myImage})`,
                  }}>
                {/* <div
                    className="bg-cover bg-center w-full h-screen relative"
                    style={{
                      backgroundImage: `url(${myImage})`,
                    }}
                ></div> */}
{/* flex justify-between relative */}
                    <div className="flex justify-between relative">                                 
                    <div className=" h-8 flex items-center justify-center">
                        <div className="group relative w-max mt-8">
                        <a className="text-black font-bold text-2xl py-3 px-4 rounded-md transition-colors duration-300 "          
                        href="/">                  
                        TESLA
                        </a>          
                        </div>              
                    </div>
                    <div className="hidden md:flex h-8 flex items-center justify-center">

                    <div className="group relative w-max mt-8">
                        <a href="https://www.tesla.com/models" 
                        className=" text-black hover:bg-gray-300 py-3 px-4 rounded-md transition-colors duration-300">Model S  </a>                                                                      
                      <span
                      className="pointer-events-none absolute -bottom-7 left-7 w-max opacity-0 transition-opacity group-hover:opacity-100 text-white bg-black py-1 px-1 rounded-md"
                    >
                      Model S
                    </span>
                      </div>



                      <div className="group relative w-max mt-8">
                        <a href="https://www.tesla.com/model3" 
                        className=" text-black hover:bg-gray-300 py-3 px-4 rounded-md transition-colors duration-300">Model 3 </a>                                                                      
                      <span
                      className="pointer-events-none absolute -bottom-7 left-7 w-max opacity-0 transition-opacity group-hover:opacity-100 text-white bg-black py-1 px-1 rounded-md"
                    >
                      Model 3 
                    </span>
                      </div>


                      <div className="group relative w-max mt-8">
                        <a href="https://www.tesla.com/modelx" 
                        className=" text-black hover:bg-gray-300 py-3 px-4 rounded-md transition-colors duration-300">Model X  </a>                                                                      
                      <span
                      className="pointer-events-none absolute -bottom-7 left-7 w-max opacity-0 transition-opacity group-hover:opacity-100 text-white bg-black py-1 px-1 rounded-md"
                    >
                      Model X 
                    </span>
                      
                      </div>


                      <div className="group relative w-max mt-8">
                        <a href="https://www.tesla.com/modely" 
                        className=" text-black hover:bg-gray-300 py-3 px-4 rounded-md">Model Y  </a>                                                                      
                      <span
                      className="pointer-events-none absolute -bottom-7 left-7 w-max opacity-0 transition-opacity group-hover:opacity-100 text-white bg-black py-1 px-1 rounded-md"
                    >
                      Model Y
                    </span>
                      </div>


                      

                      <div className="group relative w-max mt-8">
                          <a href="https://www.tesla.com/solarroof" 
                          className=" text-black hover:bg-gray-300 py-3 px-4 rounded-md">Solar Roof</a> 
                          <span
                        className="pointer-events-none absolute -bottom-7 left-7 w-max opacity-0 transition-opacity group-hover:opacity-100 text-white bg-black py-1 px-1 rounded-md"
                      >
                        Solar Roof
                      </span>                                                                     
                      </div>

                      <div className="group relative w-max mt-8">
                        <a href="https://www.tesla.com/solarroof" 
                        className=" text-black hover:bg-gray-300 py-3 px-4 rounded-md">Solar Panels</a> 
                        <span
                      className="pointer-events-none absolute -bottom-7 left-7 w-max opacity-0 transition-opacity group-hover:opacity-100 text-white bg-black py-1 px-1 rounded-md"
                    >
                      Solar Panels
                    </span>                                                                     
                      </div>

                      <div className="group relative w-max mt-8">
                        <a href="https://www.tesla.com/solarpanels" 
                        className=" text-black hover:bg-gray-300 py-3 px-4 rounded-md">Powerwall</a>
                        <span
                      className="pointer-events-none absolute -bottom-7 left-7 w-max opacity-0 transition-opacity group-hover:opacity-100 text-white bg-black py-1 px-1 rounded-md"
                    >
                      Powerwall
                    </span>                                                                         
                      </div>
                    </div>
                    <div className="h-8 flex items-center justify-center">


                    <div className="group relative w-max mt-8">
                        <a href="https://www.tesla.com/modely" 
                        className="hidden md:flex text-black hover:bg-gray-300 py-3 px-4 rounded-md">Shop</a>    
                        <span
                      className="pointer-events-none absolute -bottom-7 left-7 w-max opacity-0 transition-opacity group-hover:opacity-100 text-white bg-black py-1 px-1 rounded-md"
                    >
                      Shop
                    </span>                                                                    
                      </div>


                      <div className="group relative w-max mt-8">
                        <a href="https://www.tesla.com/solarroof" 
                        className="hidden md:flex text-black hover:bg-gray-300 py-3 px-4 rounded-md">Account</a>
                        <span
                      className="pointer-events-none absolute -bottom-7 left-7 w-max opacity-0 transition-opacity group-hover:opacity-100 text-white bg-black py-1 px-1 rounded-md"
                    >
                      Account
                    </span>                                                                      
                      </div>


                      <div className="group relative w-max mt-8">
                        <a href="https://www.tesla.com/solarpanels" 
                        className=" text-black hover:bg-gray-300 py-3 px-4 rounded-md">Menu</a>  
                        <span
                      className="pointer-events-none absolute -bottom-7 left-7 w-max opacity-0 transition-opacity group-hover:opacity-100 text-white bg-black py-1 px-1 rounded-md"
                    >
                      Menu
                    </span>                                                                     
                      </div>
                    </div>
                    </div>


                <div className="flex flex-col md:flex-row md:justify-center fixed bottom-0 w-full space-x-4">
                  <button className="w-full md:w-auto text-xl md:text-2xl py-3 px-12 bg-gray-600 text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 mx-3">
                    <a href="https://www.tesla.com/">View Inventory</a>   
                  </button>    
                  <button className="w-full md:w-auto text-xl md:text-2xl py-3 px-12 bg-gray-300 text-black rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 mt-4 md:mt-0 mx-2">
                    <a href="https://www.tesla.com/">Custom Order</a>   
                  </button>
                </div>

              </div>


                  {/* Image */}
                  {/* <img src={myImage}> 
                  </img> */}
                            
                 <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2>                 
                text-black px-4 py-1 rounded-md text-xl  sm:mt-12">
                <span class="font-bold px-12 text-3xl">Model 3</span><br></br>
                Leasing starting at $349/mo       
                 </div>

              </div> 
          
      </div>
  )
}
export default Page