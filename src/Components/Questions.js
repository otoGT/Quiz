import react,{ useState } from "react";



export default function Questions(){

    function Clicked(){
        document.getElementById('1').classList.add('bg-blue-500')
        document.getElementById('1.1').classList.remove('bg-blue-500')
        document.getElementById('1.2').classList.remove('bg-blue-500')
    }
    function Clicked11(){
        document.getElementById('1.1').classList.add('bg-blue-500')
        document.getElementById('1').classList.remove('bg-blue-500')
        document.getElementById('1.2').classList.remove('bg-blue-500')
    }
    function Clicked12(){
        document.getElementById('1.2').classList.add('bg-blue-500')
        document.getElementById('1').classList.remove('bg-blue-500')
        document.getElementById('1.1').classList.remove('bg-blue-500')
    }
    function Clicked2(){
        document.getElementById('2').classList.add('bg-blue-500')
        document.getElementById('21').classList.remove('bg-blue-500')
        document.getElementById('22').classList.remove('bg-blue-500')
    }
    function Clicked21(){
        document.getElementById('21').classList.add('bg-blue-500')
        document.getElementById('2').classList.remove('bg-blue-500')
        document.getElementById('22').classList.remove('bg-blue-500')
    }
    function Clicked22(){
        document.getElementById('22').classList.add('bg-blue-500')
        document.getElementById('2').classList.remove('bg-blue-500')
        document.getElementById('21').classList.remove('bg-blue-500')
    }
    function Clicked3(){
        document.getElementById('3').classList.add('bg-blue-500')
        document.getElementById('31').classList.remove('bg-blue-500')
        document.getElementById('32').classList.remove('bg-blue-500')
    }
    function Clicked31(){
        document.getElementById('31').classList.add('bg-blue-500')
        document.getElementById('3').classList.remove('bg-blue-500')
        document.getElementById('32').classList.remove('bg-blue-500')
    }
    function Clicked32(){
        document.getElementById('32').classList.add('bg-blue-500')
        document.getElementById('3').classList.remove('bg-blue-500')
        document.getElementById('31').classList.remove('bg-blue-500')
    }
    function Clicked4(){
        document.getElementById('4').classList.add('bg-blue-500')
        document.getElementById('41').classList.remove('bg-blue-500')
        document.getElementById('42').classList.remove('bg-blue-500')
    }
    function Clicked41(){
        document.getElementById('41').classList.add('bg-blue-500')
        document.getElementById('4').classList.remove('bg-blue-500')
        document.getElementById('42').classList.remove('bg-blue-500')
    }
    function Clicked42(){
        document.getElementById('42').classList.add('bg-blue-500')
        document.getElementById('4').classList.remove('bg-blue-500')
        document.getElementById('41').classList.remove('bg-blue-500')
    }
    function Clicked5(){
        document.getElementById('5').classList.add('bg-blue-500')
        document.getElementById('51').classList.remove('bg-blue-500')
        document.getElementById('52').classList.remove('bg-blue-500')
    }
    function Clicked51(){
        document.getElementById('51').classList.add('bg-blue-500')
        document.getElementById('5').classList.remove('bg-blue-500')
        document.getElementById('52').classList.remove('bg-blue-500')
    }
    function Clicked52(){
        document.getElementById('52').classList.add('bg-blue-500')
        document.getElementById('5').classList.remove('bg-blue-500')
        document.getElementById('51').classList.remove('bg-blue-500')
    }
    function Clicked6(){
        document.getElementById('6').classList.add('bg-blue-500')
        document.getElementById('61').classList.remove('bg-blue-500')
        document.getElementById('62').classList.remove('bg-blue-500')
    }
    function Clicked61(){
        document.getElementById('61').classList.add('bg-blue-500')
        document.getElementById('6').classList.remove('bg-blue-500')
        document.getElementById('62').classList.remove('bg-blue-500')
    }
    function Clicked62(){
        document.getElementById('62').classList.add('bg-blue-500')
        document.getElementById('6').classList.remove('bg-blue-500')
        document.getElementById('61').classList.remove('bg-blue-500')
    }
    function Clicked7(){
        document.getElementById('7').classList.add('bg-blue-500')
        document.getElementById('71').classList.remove('bg-blue-500')
        document.getElementById('72').classList.remove('bg-blue-500')
    }
    function Clicked71(){
        document.getElementById('71').classList.add('bg-blue-500')
        document.getElementById('7').classList.remove('bg-blue-500')
        document.getElementById('72').classList.remove('bg-blue-500')
    }
    function Clicked72(){
        document.getElementById('72').classList.add('bg-blue-500')
        document.getElementById('7').classList.remove('bg-blue-500')
        document.getElementById('71').classList.remove('bg-blue-500')
    }
    function Clicked8(){
        document.getElementById('8').classList.add('bg-blue-500')
        document.getElementById('81').classList.remove('bg-blue-500')
        document.getElementById('82').classList.remove('bg-blue-500')
    }
    function Clicked81(){
        document.getElementById('81').classList.add('bg-blue-500')
        document.getElementById('8').classList.remove('bg-blue-500')
        document.getElementById('82').classList.remove('bg-blue-500')
    }
    function Clicked82(){
        document.getElementById('82').classList.add('bg-blue-500')
        document.getElementById('8').classList.remove('bg-blue-500')
        document.getElementById('81').classList.remove('bg-blue-500')
    }
    function Clicked9(){
        document.getElementById('9').classList.add('bg-blue-500')
        document.getElementById('91').classList.remove('bg-blue-500')
        document.getElementById('92').classList.remove('bg-blue-500')
    }
    function Clicked91(){
        document.getElementById('91').classList.add('bg-blue-500')
        document.getElementById('9').classList.remove('bg-blue-500')
        document.getElementById('92').classList.remove('bg-blue-500')
    }
    function Clicked92(){
        document.getElementById('92').classList.add('bg-blue-500')
        document.getElementById('9').classList.remove('bg-blue-500')
        document.getElementById('91').classList.remove('bg-blue-500')
    }
    function Clicked0(){
        document.getElementById('0').classList.add('bg-blue-500')
        document.getElementById('01').classList.remove('bg-blue-500')
        document.getElementById('02').classList.remove('bg-blue-500')
    }
    function Clicked01(){
        document.getElementById('01').classList.add('bg-blue-500')
        document.getElementById('0').classList.remove('bg-blue-500')
        document.getElementById('02').classList.remove('bg-blue-500')
    }
    function Clicked02(){
        document.getElementById('02').classList.add('bg-blue-500')
        document.getElementById('0').classList.remove('bg-blue-500')
        document.getElementById('01').classList.remove('bg-blue-500')
    }

    return(
        <div id="Main"className="hidden w-screen h-screen hero-pattern">
            <div className="pr-16 mr-auto"><h1>1.In a website browser address bar, what does “www” stand for?</h1>
            <h2><button id="1" onClick={Clicked}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>World Wide Web</h2>
            <h2><button id="1.1" onClick={Clicked11}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>Nothing</h2>
            <h2><button id="1.2" onClick={Clicked12}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>World Wrestling</h2>
            </div>
            <div className="pr-16 mr-auto"><h1>2.In what year were the first Air Jordan sneakers released?</h1>
            <h2><button id="2" onClick={Clicked2}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>1984</h2>
            <h2><button id="21" onClick={Clicked21}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>1990</h2>
            <h2><button id="22" onClick={Clicked22}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>2000</h2>
            </div>
            <div className="ml-auto mr-auto"><h1>3.In a bingo game, which number is represented by the phrase “two little ducks”?</h1>
            <h2><button id="3" onClick={Clicked3}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>22</h2>
            <h2><button id="31" onClick={Clicked31}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>11</h2>
            <h2><button id="32" onClick={Clicked32}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>44</h2>
            </div>
            <div className="pr-16 mr-auto"><h1>4.According to Greek mythology, who was the first woman on earth?</h1>
            <h2><button id="4" onClick={Clicked4}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>Pandora</h2>
            <h2><button id="41" onClick={Clicked41}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>No one</h2>
            <h2><button id="42" onClick={Clicked42}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>Athena</h2>
            </div>
            <div className="pr-16 mr-auto"><h1>5.Samuel Tilden, Grover Cleveland, Al Gore, and Hillary Clinton share what distinction among U.S. presidential candidates?</h1>
            <h2><button id="5" onClick={Clicked5}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>They won the popular vote but lost the electoral college vote</h2>
            <h2><button id="51" onClick={Clicked51}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>They won the electoral college vote but lost the popular vote</h2>
            <h2><button id="52" onClick={Clicked52}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>They never won anything</h2>
            </div>
            <div className="pr-16 mr-auto"><h1>6.Which African country was formerly known as Abyssinia?</h1>
            <h2><button id="6" onClick={Clicked6}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>Ethiopia </h2>
            <h2><button id="61" onClick={Clicked61}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>Nigeria</h2>
            <h2><button id="62" onClick={Clicked62}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>Kenya</h2>
            </div>
            <div className="pr-16 mr-auto"><h1>7.Tennis star Serena Williams won which major tournament while pregnant with her first child?</h1>
            <h2><button id="7" onClick={Clicked7}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>The Australian Open</h2>
            <h2><button id="71" onClick={Clicked71}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>The American Open</h2>
            <h2><button id="72" onClick={Clicked72}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>The European Open</h2>
            </div>
            <div className="pr-16 mr-auto"><h1>8.In which European city would you find Orly airport?</h1>
            <h2><button id="8" onClick={Clicked8}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>Paris</h2>
            <h2><button id="81" onClick={Clicked81}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>London</h2>
            <h2><button id="82" onClick={Clicked82}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>New York</h2>
            </div>
            <div className="pr-16 mr-auto"><h1>9.Which singer’s real name is Stefani Joanne Angelina Germanotta?</h1>
            <h2><button id="9" onClick={Clicked9}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>Lady Gaga</h2>
            <h2><button id="91" onClick={Clicked91}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>Ariane grande</h2>
            <h2><button id="92" onClick={Clicked92}  className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>kardashian</h2>
            </div>
            <div className="pr-16 mr-auto"><h1>10.The only known monotremes in the animal kingdom are the echidna and which other creature?</h1>
            <h2><button id="0" onClick={Clicked0} className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>The platypus</h2>
            <h2><button id="01" onClick={Clicked01} className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>The wolf</h2>
            <h2><button id="02" onClick={Clicked02} className="h-5 w-5 border-black mt-1 border-2 rounded-full hover:bg-blue-500 duration-500"/>The deer</h2>
            </div>
        </div>
    )
}