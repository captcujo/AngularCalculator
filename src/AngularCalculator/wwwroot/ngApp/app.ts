console.log('AngularCalculator');

namespace AngularCalculator
{
    angular.module('AngularCalculatorController', []);

    class calculatorController
    {
        public input1: number = 0;
        public input2: number = 0;
        public results: number = 0;
        public display: string = ' ';
        public operator: string = null;
        public lastSelectedOperator:string = null;

        public acceptOperator(operator: string)
        {
            this.calculateResults(operator);
            this.display = '';
        }

        public acceptNumber(input:string)
        {
            this.display += input;
        }

        public clearNumbers()
        {
            this.input1 = 0;
            this.input2 = 0;
            this.results = 0;
            this.display = '';
        }

        public calculateResults(userSelectedOperator: string)
        {
            if(this.display != '')
                this.input1 = +this.display;
            
            if (this.results == 0)
            {
                this.results = this.input1;
                this.lastSelectedOperator = userSelectedOperator;
            }
            else if (this.display == '')
            {
                this.lastSelectedOperator = userSelectedOperator;
            }
            else
            { 
                //this.input1 = +this.display;

                if (userSelectedOperator != '=')
                {
                    this.operator = this.lastSelectedOperator;
                    this.lastSelectedOperator = userSelectedOperator;
                }
                else
                {
                    this.operator = this.lastSelectedOperator;
                }
                console.log(`Selected operator ${userSelectedOperator} last operator ${this.lastSelectedOperator} this.operator ${this.operator}`);
                console.log(`Results prior to this.operator ${this.results} input1 = ${this.input1}`);

                switch (this.operator)
                {
                    case '+':
                        this.results += this.input1;
                        this.input1 = this.results;
                        break;
                    case '-':
                        this.results -= this.input1;
                        this.input1 = this.results;
                        break;
                    case '*':
                        this.results *= this.input1;
                        this.input1 = this.results;
                        break;
                    case '/':
                        this.results /= this.input1;
                        this.input1 = this.results;
                        break;
                    case '=':
                        this.results /= this.input1;
                        this.input1 = this.results;
                        break;
                    //default:
                    //default code block
                }
            }
        }
    }

    angular.module('AngularCalculatorController').controller('calculatorController', calculatorController);
}

