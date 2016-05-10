var app = angular.module('GroupApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', 'studentService', function ($scope, $mdSidenav, studentService) {
    var allStudents = [];


    $scope.subgroups = [1, 2];
    $scope.selectedsubgroups = [1, 2];
    $scope.isChosenOnly = false;
    //$scope.toggle = function (item, list) {
    //  var idx = list.indexOf(item);
    //  if (idx >-1) {
    //    list.splice(idx, 1);
    //  } else {
    //    list.push(item);
    //  }
    //};
    $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
    };
    $scope.toggleChosen = function (item) {
        $scope.isChosenOnly = !$scope.isChosenOnly;
    };
    //$scope.filterBySubgroup = function (student) {
    //  return $scope.exists(student.subgroup, $scope.selectedsubgroups);
    //};

    $scope.filterByChosen = function (student) {
        if ($scope.isChosenOnly) {
            if (student.isChosenProject) {
                console.log(student);
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    };

    $scope.selected = null;
    $scope.students = allStudents;
    $scope.selectStudent = selectStudent;
    $scope.toggleSidenav = toggleSidenav;

    loadStudents();

    function loadStudents() {
        studentService.loadAll()
            .then(function (students) {
                allStudents = students;
                $scope.students = [].concat(students);
                $scope.selected = $scope.students[0];
            })
    }

    function toggleSidenav(name) {
        $mdSidenav(name).toggle();
    }

    function selectStudent(student) {
        $scope.selected = angular.isNumber(student) ? $scope.students[student] : student;
        $scope.toggleSidenav('left');
    }

}]);

app.service('studentService', ['$q', function ($q) {

    // http://www.convertcsv.com/csv-to-json.htm
    var students = [
        {
            "name":"Andrii Deshchakivskyi",
            "websiteUrl":"http://andriydeshchakivskyi.github.io/mycv",
            "codeSourceUrl":"https://github.com/AndriyDeshchakivskyi/mycv.git",
            "photo":"images/students/deschakivskiy.jpg",
            "cvUrl":""
        },
        {
            "name":"Andrii Mis'kovych",
            "websiteUrl":"http://miskovych.github.io/My_CV/",
            "codeSourceUrl":"https://github.com/Miskovych/homework04",
            "photo":"images/students/miskovych.jpg",
            "cvUrl":""
        },
        {
            "name":"Anton Morya",
            "websiteUrl":"http://antonmorya.github.io/homepage ",
            "codeSourceUrl":"https://github.com/antonmorya/homepage.git",
            "photo":"images/students/morya.jpg",
            "cvUrl":"https://drive.google.com/file/d/0BzB_--Ozm2YsREdlTzAxSEx3Unc/view?usp=sharing"
        },
        {
            "name":"Bogdan Byshevskyi",
            "websiteUrl":"http://byshevskyi.github.io/website",
            "codeSourceUrl":"https://github.com/byshevskyi/website",
            "photo":"images/students/byshevskiy.jpg",
            "cvUrl":""
        },
        {
            "name":"Bohdan Linnik",
            "websiteUrl":"http://bogdanlinnik.github.io/mycv/",
            "codeSourceUrl":"https://github.com/BogdanLinnik/mycv",
            "photo":"images/students/linnik.jpg",
            "cvUrl":"https://drive.google.com/open?id=0B8nHhOw4p92kYzk4aEZKOTV6UUE"
        },
        {
            "name":"Vladyslav Zubar",
            "websiteUrl":"http://vladko1975.github.io/CV",
            "codeSourceUrl":"https://github.com/vladko1975/CV",
            "photo":"images/students/zubar.png",
            "cvUrl":""
        },
        {
            "name":"Ivan Hladysh",
            "websiteUrl":"http://hladysh.github.io/sv",
            "codeSourceUrl":"https://github.com/hladysh/sv.git",
            "photo":"images/students/hladysh.jpg",
            "cvUrl":""
        },
        {
            "name":"Mykhailo Bilous",
            "websiteUrl":"http://mykhailobilous.github.io/main_project/",
            "codeSourceUrl":"https://github.com/MykhailoBilous/main_project.git",
            "photo":"images/students/no-photo.gif",
            "cvUrl":""
        },
        {
            "name":"Oksana Pachkovska",
            "websiteUrl":"http://oksanabrever.github.io/cvsite/",
            "codeSourceUrl":"https://github.com/OksanaBrever/cvsite",
            "photo":"images/students/pachkovska.jpg",
            "cvUrl":""
        },
        {
            "name":"Oksana Oleschenko",
            "websiteUrl":"http://oxanayoxana.github.io/mywebpage/",
            "codeSourceUrl":"https://github.com/oxanayoxana/mywebpage/tree/gh-pages",
            "photo":"images/students/oleschenko.jpg",
            "cvUrl":""
        },
        {
            "name":"Oleh Kopytko",
            "websiteUrl":"http://olehkopytko.github.io/project-cv6/",
            "codeSourceUrl":"https://github.com/olehkopytko/project-cv6",
            "photo":"images/students/kopytko.jpg",
            "cvUrl":"https://drive.google.com/open?id=0B9BZAXN8h_xxN2VJeVE3NlpqMjA"
        },
        {
            "name":"Taras Pashko",
            "websiteUrl":"http://etrn.github.io/mwb",
            "codeSourceUrl":"https://github.com/etrn/mwb",
            "photo":"images/students/pashko.jpg",
            "cvUrl":""
        },
        {
            "name":"Andrii Sheremeta",
            "websiteUrl":"http://andriyvn.github.io/cv/",
            "codeSourceUrl":"https://github.com/AndriyVN/cv",
            "photo":"images/students/sheremeta.jpg",
            "cvUrl":""
        },
        {
            "name":"Vasylyna Kurylo",
            "websiteUrl":"http://lina25.github.io/site02/",
            "codeSourceUrl":"https://github.com/Lina25/site02",
            "photo":"images/students/kurylo.jpg",
            "cvUrl":""
        },
        {
            "name":"Ivan Voytovych",
            "websiteUrl":"http://voytovychii.github.io/my_website",
            "codeSourceUrl":"https://github.com/VoytovychII/my_website.git",
            "photo":"images/students/voytovych.jpg",
            "cvUrl":"https://drive.google.com/file/d/0B0lJkOwZxqBgWlVjVXFuT2t5MGs/view?usp=sharing"
        },
        {
            "name":"Ivan Popovych",
            "websiteUrl":"http://ivanpopovych.github.io/IvanPopovych/",
            "codeSourceUrl":"https://github.com/IvanPopovych/IvanPopovych",
            "photo":"images/students/popovych.jpg",
            "cvUrl":"https://drive.google.com/file/d/0BzXYz8WKMRTUcFdmQUllUDlld3M/view"
        },
        {
            "name":"Igor Lukov",
            "websiteUrl":"http://29lim85.github.io/git-site",
            "codeSourceUrl":"https://github.com/29lim85/git-site/tree/gh-pages",
            "photo":"images/students/lukov.jpg",
            "cvUrl":""
        },
        {
            "name":"Maksym Kovynyev",
            "websiteUrl":"http://kovynyevmaxym.github.io/project/",
            "codeSourceUrl":"https://github.com/KovynyevMaxym/project",
            "photo":"images/students/kovynyev.png",
            "cvUrl":"https://drive.google.com/folderview?id=0B_L-6D14yCm0ODBGZUFKZjZydnc&usp=sharing"
        },
        {
            "name":"Marta Kostets'ka",
            "websiteUrl":"http://murcheniatko.github.io/cvpage",
            "codeSourceUrl":"https://github.com/murcheniatko/cvpage",
            "photo":"images/students/kostetska.jpg",
            "cvUrl":""
        },
        {
            "name":"Oleksandr Viniar",
            "websiteUrl":"http://sashaviniar.github.io/mycvproject/index.html",
            "codeSourceUrl":"https://github.com/SashaViniar/mycvproject",
            "photo":"images/students/viniar.png",
            "cvUrl":""
        },
        {
            "name":"Oleksandr Derenko",
            "websiteUrl":"http://sashaderenko.github.io/cv",
            "codeSourceUrl":"https://github.com/SashaDerenko/cv",
            "photo":"images/students/no-photo.gif",
            "cvUrl":""
        },
        {
            "name":"Olena Kutsir",
            "websiteUrl":"http://olenakutsir.github.io/mypage1/",
            "codeSourceUrl":"https://github.com/olenakutsir/mypage1",
            "photo":"images/students/kutsir.jpg",
            "cvUrl":""
        },
        {
            "name":"Petro Kushnir",
            "websiteUrl":"http://petrokushnir.github.io/website",
            "codeSourceUrl":"https://github.com/PetroKushnir/website",
            "photo":"images/students/kushnir.jpg",
            "cvUrl":""
        },
        {
            "name":"Uliana Furyk",
            "websiteUrl":"http://ulyanafuryk.github.io/cv_uliana_furyk/",
            "codeSourceUrl":"https://github.com/ulyanafuryk/cv_uliana_furyk",
            "photo":"images/students/furyk.jpg",
            "cvUrl":""
        }
    ];

    // Promise-based API
    return {
        loadAll: function () {
            // Simulate async nature of real remote calls
            return $q.when(students);
        }
    };
}]);
