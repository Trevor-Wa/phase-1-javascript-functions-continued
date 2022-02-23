function saturdayFun(activity = 'roller-skate'){
    return (`This Saturday, I want to ${activity}!`)
}
saturdayFun();
saturdayFun('bathe my dog!');

function mondayWork(activity1 = 'go to the office'){
    return (`This Monday, I will ${activity1}.`);
}
mondayWork();
mondayWork('work from home');


function wrapAdjective(nice='*'){
    return function(adjective= 'special'){
        return (`You are ${nice}${adjective}${nice}!`)
    }
}
const encouragingPromptFunction= wrapAdjective("!!!");