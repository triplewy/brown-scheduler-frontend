export function algorithm(courses, concentrations, year, concentration, pathways, takenCourses_param) {
    const pathways_mapping = {
        'Systems':0,
        'Data':1,
        'Artificial Intelligence/Machine Learning':2,
        'Theory':3,
        'Security':4,
        'Visual Computing':5,
        'Computer Architecture':6,
        'Computational Biology':7,
        'Design':8
    }
    console.log(takenCourses_param)
    let takenCourses = []
    if(takenCourses_param&& takenCourses_param.length >0){
        for(var i = 0;i<takenCourses_param.length;i++){
            if(takenCourses_param[i]){
                takenCourses.push(takenCourses_param[i].code)
            }
        }
    }
    console.log(pathways);
    //every course
    //every concetration
    //year they graduate
    //concentration
    //pathways, array of length 2
    //taken courses

    //third stuffs
    var results = []
    var side_results = []// for recommendations, basically the second or third or class
    //console.log(concentration)
    var requirements_not_taken = []
    if(concentration.requirements){
        // eliminate intro courses if necessary
        var intro = concentration.requirements.intro
        console.log(intro)
        var done = []
        console.log('takenCourses ' +takenCourses[0])
        if(takenCourses.length==0){
            results.push(concentration.requirements.intro.series1)
        }else{
            var keys = Object.keys(intro);
            for(var i=0;i<keys.length;i++){
                var intro_series = intro[keys[i]];
                var taken = 0
                takenCourses.every(function(val) {  if(intro_series.indexOf(val)>=0){
                    taken+=1
                } });
                done.push(taken);
            }
            let i = done.indexOf(Math.max(...done));
            let any_added_intro = false
            for(var c of intro[keys[i]]){
                console.log(c)
                if(!takenCourses.includes(c)){
                    results.push(c)
                    any_added_intro = true
                }
            }
            if(!any_added_intro){
                requirements_not_taken.push("Intro Series")
            }
        }

        //pathways check, just suggest all untaken intermediate classes
        let pathways_json = concentration.requirements.pathways
        console.log(pathways_json)
        let total_intermediates = 0
        let taken_intermediates = []
        for(var index in pathways){
            //if no core, add earliest core class
            let path_done = true;
            let cur_pathway = pathways[index]
            let conc_pathway = pathways_json[pathways_mapping[cur_pathway]]
            console.log(cur_pathway);
            console.log(conc_pathway);
            // core check
            let core_taken = false;
            for(var core_index in conc_pathway.Core){
                let core_class = conc_pathway.Core[core_index]
                if(takenCourses && takenCourses.includes(core_class)){
                    core_taken = true;
                    break;
                }
            }
            //default is first if no core
            if(!core_taken){
                path_done = false
                results.push(conc_pathway.Core[0])
            }
            //check intermediates
            let conc_intermediates = conc_pathway.Intermediate

            for (var conc_i in conc_intermediates){
                let intermediate_class = conc_intermediates[conc_i]
                if(intermediate_class.includes(' or ')){
                    let class_array = intermediate_class.split(' or ');
                    let took_one =false;
                    for(var class_index in class_array){
                        let array_class = class_array[class_index]
                        if(takenCourses&&takenCourses.includes(array_class)){
                            took_one = true;
                            if(!taken_intermediates.includes(array_class)){
                                taken_intermediates.push(array_class);
                            }
                        }
                    }
                    if(!took_one){
                        path_done = false;
                        results.push(class_array[0])
                        //add remainder for recs
                        for(var class_index in class_array.slice(1)){
                            let array_class = class_array[class_index]
                            side_results.push(array_class);
                        }
                    }
                }
                else{
                    if(!takenCourses||!takenCourses.includes(intermediate_class)){
                        path_done = false
                        results.push(intermediate_class);
                    }
                }
            }
            if(!path_done){
                requirements_not_taken.push('Pathway '+cur_pathway+ ' not done')
            }

        }
        //recommend intermediates and increment taken intermeds
        total_intermediates += taken_intermediates.length

        //check if one from each category
        let intermediate_categories = concentration.requirements["Intermediate Courses"]
        console.log(intermediate_categories)
        for(var cat in intermediate_categories){
            let cat_list = intermediate_categories[cat]
            if(cat==="Mathematics"){ //or contains OR, but I haven't seen another one yet
                cat_list = []
                for(var or_i in cat_list){
                    let split = cat_list[or_i].split(' or ');
                    for(var j in split){
                        cat_list.push(split[j]);
                    }
                }
            }
            let taken_cat = false;
            for(var t_i in taken_intermediates){
                let taken_i = taken_intermediates[t_i]
                if(cat_list.includes(taken_i)){
                    taken_cat = true
                    break
                }
            }
            if(!taken_cat){
                requirements_not_taken.push("Class from intermediate category: "+cat + " not taken")
                results.concat(cat_list[0])
                side_results.concat(cat_list.slice(1))
            }
        }
        if(total_intermediates<5){
            requirements_not_taken.push("Total intermediate <5")
        }
    }

    //return 2D array each array denoting semester
    console.log(requirements_not_taken)
    let finalresult = {'results':results, 'recs':side_results, 'reqs_not_taken':requirements_not_taken}
    console.log(finalresult)
    return finalresult;
}
