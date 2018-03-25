export default class Sorter {
    static sortApplications(applications) {
        let orderedApplications = [];
        applications.forEach(application => {
            this.insertApplication(application, orderedApplications);
        });

        return orderedApplications;
    }

    static insertApplication(application, applications, start = 0, endVal) {
        const length = applications.length;
        const end = typeof(endVal) !== 'undefined' ? endVal : length - 1;
        const middle = start + Math.floor((end - start)/2);
        const currentApdex = application.apdex;


        if(length === 0){
            applications.push(application);
            return;
        }

        if(currentApdex >= applications[end].apdex){
            applications.splice(end + 1, 0, application);
            return;
        }

        if(currentApdex <= applications[start].apdex){//!!
            applications.splice(start, 0, application);
            return;
        }

        if(start >= end){
            return;
        }

        if(currentApdex <= applications[middle].apdex){
            this.insertApplication(application, applications, start, middle - 1);
            return;
        }

        if(currentApdex >= applications[middle].apdex){
            this.insertApplication(application, applications, middle + 1, end);
        }
    }
}