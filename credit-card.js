let userName = document.getElementById('name');
        let cardNumber = document.getElementById('card-number');
        let cardName = document.getElementById('card-name');
        let display2 = document.getElementById('num');
        let display = document.getElementById('cname')
        let month = document.getElementById('month')
        let output = document.getElementById('month-show')
        let output2 = document.getElementById('year-show')
        let codeResult = document.getElementById('pin-number')
        let indexPin = 0;
        let indexPinNum = 0;
        let data = cardNumber.value;
        let result = document.getElementById('result');
        let result2 = document.getElementById('result');

        let cardUserName = (params) => {
            if (params == 'name') {
                userName.innerHTML = cardName.value
            }
        }
        // codeResult.innerText = '123'
        var cardPin = ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'];
        
        let printPin = () => {
            
            // codeResult.innerText = '#### #### #### ####'
            codeResult.innerText = '';
            console.log(cardPin);
            for (let i = 0; i < cardPin.length; i++) {
                if (i > 0 && i % 4 == 0) {
                    codeResult.innerText += '_';
                }
                codeResult.innerText += cardPin[i];
            }
        }
        printPin();
        // let getData=()=>{
        //     cardCodeNumber(data[indexPin])
        // }
        // let cardCodeNumber=(pin)=>{
        //     if(pin == 'number'){
        //         setTimeout(()=>{

        //         },200);
        //         return;
        //     }
        //     setTimeout(()=>{
        //         codeResult.innerHTML = cardNumber.value;
        //         indexPinNum++;
        //         cardCodeNumber(pin)
        //     },200)
        // }

        let cardCodeNumber = (pin) => {

            // var prevText = codeResult.innerHTML;
            // var input = cardNumber.value;
            var lastInp = cardNumber.value[cardNumber.value.length - 1];
            // alert(lastInp);
            cardPin.shift();
            // prevText = prevText.replace(hey, '');
            //    console.log(hey,prevText);
            if (pin == 'number') {
                var tLen = codeResult.innerHTML.length;
                if (cardNumber.value.length <= 16) {
                    cardPin.push(lastInp);
                    printPin();
                    // alert()
                    // var hash = '';
                    // for (let i = 0; i > tLen; i++) {
                    //     hash += "#";
                    // }
                    // codeResult.innerHTML = prevText;
                    // codeResult.innerHTML += lastInp;
                    // codeResult.innerHTML.slice(0,1);

                    // var theVal = 
                } else {
                    // codeResult.innerHTML = cardNumber.value.concat(prevText);
                    // alert(codeResult.innerHTML.length)

                }
            }
        }


        function shiftName(params) {
            if (params == 'name') {
                display.style.transition = 'all 2s'
                display.style.transform = 'translateY(-30px)'
            }
        }
        function shiftNum(params) {
            if (params == 'num') {
                display2.style.transition = 'all 2s'
                display2.style.transform = 'translateY(-30px)'
            }
        }
        function returnName(params) {
            if (params == 'name') {
                if (cardName.value == '') {
                    display.style.transition = 'all 2s'
                    display.style.transform = 'translateY(0px)'
                }
            }
        }
        function returnNum(params) {
            if (params == 'num') {
                if (cardNumber.value == '') {
                    display2.style.transition = 'all 2s'
                    display2.style.transform = 'translateY(0px)'
                }
            }
        }
        let monthDisplay = (params) => {
            if (month.value == 'jan') {
                output.innerHTML = '01'
            }
            else if (month.value == 'feb') {
                output.innerHTML = '02'
            }
            else if (month.value == 'mar') {
                output.innerHTML = '03'
            }
            else if (month.value == 'apr') {
                output.innerHTML = '04'
            }
            else if (month.value == 'may') {
                output.innerHTML = '05'
            }
            else if (month.value == 'jun') {
                output.innerHTML = '06'
            }
            else if (month.value == 'jul') {
                output.innerHTML = '07'
            }
            else if (month.value == 'aug') {
                output.innerHTML = '08'
            }
            else if (month.value == 'sep') {
                output.innerHTML = '09'
            }
            else if (month.value == 'oct') {
                output.innerHTML = '10'
            }
            else if (month.value == 'nov') {
                output.innerHTML = '11'
            }
            else if (month.value == 'dec') {
                output.innerHTML = '12'
            }
        }
        let yearDisplay = (params) => {
            if (year.value == '21') {
                output2.innerHTML = '21'
            }
            else if (year.value == '22') {
                output2.innerHTML = '22'
            }
            else if (year.value == '23') {
                output2.innerHTML = '23'
            }
            else if (year.value == '24') {
                output2.innerHTML = '24'
            }
            else if (year.value == '25') {
                output2.innerHTML = '25'
            }
            else if (year.value == '26') {
                output2.innerHTML = '26'
            }
            else if (year.value == '27') {
                output2.innerHTML = '27'
            }
            else if (year.value == '28') {
                output2.innerHTML = '28'
            }
            else if (year.value == '29') {
                output2.innerHTML = '29'
            }
            else if (year.value == '30') {
                output2.innerHTML = '30'
            }
        }
        let validateData = () => {
            validateNumber()
        }
        let validateNumber = () => {
            cardNumber = document.getElementById('card-number').value;
            let regex = /^(?= 50|51|52|53|54|55){1}[0-9]{14}/;
            let check = regex.test(cardNumber);
            if (!check || regex > 16 || regex < 16) {
                result.innerHTML = `invalid card number`
                console.log(result);
            }
            else {
                result.innerHTML = `valid card number`
                console.log(result);
            }
        }