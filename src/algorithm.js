export function algorithm(courses, concentrations, year, concentration, pathways, takenCourses) {
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
    console.log(courses, concentrations, year, concentration, pathways, takenCourses);
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
    if(concentration.requirements){
        // eliminate intro courses if necessary
        var intro = concentration.requirements.intro
        console.log(intro)
        var done = []
        if(!takenCourses){
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
            let i = done.indexOf(Math.min(done));
            for(var c in intro[keys[i]]){
                results.push(c)
            }
        }
        
        //pathways check, just suggest all untaken intermediate classes
        let pathways_json = concentration.requirements.pathways
        console.log(pathways_json)
        for(var index in pathways){
            //if no core, add earliest core class
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
                results.push(conc_pathway.Core[0])
            }
            //check intermediates
            let conc_intermediates = conc_pathway.Intermediate
            let taken_intermediates = []
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
                        results.push(intermediate_class);
                    }
                }
            }
            //recommend intermediates
            let total_intermediates = taken_intermediates.length
            //check if one from each category
            let intermediate_categories = concentration.requirements["Intermediate Courses"]
            console.log(intermediate_categories)
            /**
            for(var taken_index in taken_intermediates){
                let taken = taken_intermediates[taken_index]
                
            }**/
        }
        
        
    }
    //return 2D array each array denoting semeter
    return results;
}
