//Matt Toft
//MiU - 1111
//JSON Populate Examples



function autoFillData() {
    var json = {
        "Techmem1": {
            "fName": ["First: ", "Matt"],
            "lName": ["Last: ", "Toft"],
            "email": ["Email: ", "mtoft@cinci.rr.com"],
            "tel": ["Phone #:","513-555-0559"],
            "sex": ["Sex: ", "Male"],
            "dropdown":["Ministry:","Tech"],
            "attending": ["Attending (Months):", "7"],
            "partner": ["Partner: ", "Yes"],
            "memtype": ["Member Type: ", "Transplant"],
            "status": ["Status:", "Member"],
        },
        "Techmem2": {
        	"fName": ["First: ", "Craig"],
            "lName": ["Last: ", "Krenzel"],
            "email": ["Email: ", "ckrenzel@cinci.rr.com"],
            "tel": ["Phone #:","513-555-0553"],
            "sex": ["Sex: ", "Male"],
            "dropdown":["Ministry:","Tech"],
            "attending": ["Attending (Months):", "16"],
            "partner": ["Partner: ", "Yes"],
            "memtype": ["Member Type: ", "Transplant"],
            "status": ["Status:", "Member"],
        },
         "Techmem3": {
           	"fName": ["First: ", "Michael"],
            "lName": ["Last: ", "Jenkins"],
            "email": ["Email: ", "mjenkins@cinci.rr.com"],
            "tel": ["Phone #:","513-555-0550"],
            "sex": ["Sex: ", "Male"],
            "dropdown":["Ministry:","Tech"],
            "attending": ["Attending (Months):", "12"],
            "partner": ["Partner: ", "Yes"],
            "memtype": ["Member Type: ", "Transplant"],
            "status": ["Status:", "Member"],
        },
         

    };
    for (var n in json) {
        var id = Math.floor(Math.random() * 110100110);
        localStorage.setItem(id, JSON.stringify(json[n]));
    }
}
