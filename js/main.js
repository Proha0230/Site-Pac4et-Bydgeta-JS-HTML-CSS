'use strict';

let budgetvalue = document.querySelector('.budget-value'),
    daybudgetvalue = document.querySelector('.daybudget-value'),
    levelvalue = document.querySelector('.level-value'),
    expensesvalue = document.querySelector('.expenses-value'),
    optionalexpensesvalue = document.querySelector('.optionalexpenses-value'),
    incomevalue = document.querySelector('.income-value'),
    monthsavingsvalue = document.querySelector('.monthsavings-value'),
    yearsavingsvalue = document.querySelector('.yearsavings-value'),
    timeyear = document.querySelector('.year-value'),
    timemonth = document.querySelector('.month-value'),
    timeday = document.querySelector('.day-value'),
    resulttable = document.querySelector('.result-table'),
    monthsavings = document.querySelector('.monthsavings'),
    cashbankvalue = document.querySelector('.cashbank-value'),
    procentvalue = document.querySelector('.procent-value'),
    expensesItem = document.querySelectorAll('.expenses-item'),
    expensesItemBtn = document.querySelector('.expenses-item-btn'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
    countbudgetbtn = document.querySelector('.count-budget-btn'),
    chooseincome = document.querySelector('#income'),
    choosesum = document.querySelector('#sum'),
    choosepercent = document.querySelector('#percent'),
    startbtn = document.querySelector('#start'),
    checkSaving = document.querySelector("#savings");





let cashbanksvalue = document.createElement('div');
cashbanksvalue.classList.add('cashbank-value');
resulttable.insertBefore(cashbanksvalue,monthsavings);

let cashbanks = document.createElement('div');
cashbanks.classList.add('cashbank');
resulttable.insertBefore(cashbanks,cashbanksvalue);
cashbanks.textContent = 'Ваши Сбережения';

let procentsvalue = document.createElement('div');
procentsvalue.classList.add('procent-value');
resulttable.insertBefore(procentsvalue,monthsavings);

let procents = document.createElement('div');
procents.classList.add('procent');
resulttable.insertBefore(procents,procentsvalue);
procents.textContent = 'Под каким процентом';

expensesItemBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countbudgetbtn.disabled = true;



let money, time;

startbtn.addEventListener('click', function()
{
        time = prompt("Введите дату :  YYYY(год) MM(месяц) DD(День)", " "),
        money = +prompt("Ваш Доход за Месяц?", " ");  
    while(isNaN(money) || money == "" || money == null)
    {
        money = +prompt("Ваш Доход за Месяц?", " ");
    }
    budgetvalue.textContent = money + " Руб";
    appData.budget = money;
    appData.timeData = time;
    timeyear.value = new Date ( Date.parse(time) ).getFullYear();
    timemonth.value = new Date ( Date.parse(time) ).getMonth() + 1;
    timeday.value = new Date ( Date.parse(time) ).getDate();
expensesItemBtn.disabled = false;
optionalExpensesBtn.disabled = false;
countbudgetbtn.disabled = false;
});

expensesItemBtn.addEventListener('click', function()
{
    let sum = 0;
    
    for (let i = 0; i < expensesItem.length; i++) 
    {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
            
            
            if ((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null 
            && a != '' && b != '' && a.length < 50)
            {
            appData.expenses[a] = b;
            sum += +b;
            }
            else 
            {                            
                 i--;
            }
            expensesvalue.textContent =  sum;
        }
    
});

optionalExpensesBtn.addEventListener('click', function()
{
  for( let i = 0; i < optionalExpensesItem.length; i++ )
{
    let opt = optionalExpensesItem[i].value;
    appData.optionalExpenses[i] = opt;
    optionalexpensesvalue.textContent += appData.optionalExpenses[i] + ' ';
}
});


countbudgetbtn.addEventListener('click', function()
{
    if (appData.budget != undefined)
    {
    appData.moneyPerDay = ((appData.budget - +expensesvalue.textContent) / 30).toFixed();
    daybudgetvalue.textContent = appData.moneyPerDay + " Руб";
    if(appData.moneyPerDay < 100) 
        {
            levelvalue.textContent = "Минимальный уровень достатка";
        }
         else if (appData.moneyPerDay > 100 && appData.moneyPerDay <2000) 
        {
            levelvalue.textContent = "Средний уровень достатка";
        }
         else if (appData.moneyPerDay > 2000) 
        {
            levelvalue.textContent = "Высокий уровень достатка";
        } 
         else 
        {
            levelvalue.textContent = "Произошла ошибка";
        }
    } 
        else
        {
            daybudgetvalue.textContent = "Сначала нажмите кнопку Начать Расчет";
        }   
});

chooseincome.addEventListener('input', function()
{
    let choose = chooseincome.value;
    appData.income = choose.split(",");
    incomevalue.textContent = appData.income;
});

checkSaving.addEventListener('click', function()
{
  if(appData.saving == true)
  {
    appData.saving = false;
  }
  else
  {
    appData.saving = true;
  }
});

choosesum.addEventListener ('input', function()
{
    if(appData.saving == true)
    {
    let save = +choosesum.value,
        percent = +choosepercent.value;
    appData.monthIncome = ((save/100/12*percent).toFixed(1)) + " Руб";
    appData.yearIncome = ((save/100*percent).toFixed(1)) + " Руб";
    monthsavingsvalue.textContent = appData.monthIncome;
    yearsavingsvalue.textContent = appData.yearIncome;
    cashbanksvalue.textContent = save;
    procentsvalue.textContent = percent;

    }
});

choosepercent.addEventListener ('input', function()
{
    if(appData.saving == true)
    {
    let save = +choosesum.value,
        percent = +choosepercent.value;
    appData.monthIncome = ((save/100/12*percent).toFixed(1)) + " Руб";
    appData.yearIncome = ((save/100*percent).toFixed(1)) + " Руб";
    monthsavingsvalue.textContent = appData.monthIncome;
    yearsavingsvalue.textContent = appData.yearIncome;
    cashbanksvalue.textContent = save;
    procentsvalue.textContent = percent;

    }
});



var appData = 
{
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income:[],
    saving: false,   
};





