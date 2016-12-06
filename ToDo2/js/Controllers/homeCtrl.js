/**
 * Created by KARLO on 2.12.2016..
 */

app.controller("homeCtrl", ["$scope", function ($scope)
{
    $scope.jobsList = [];
    $scope.jobsDoneList = [];
    var brojac = 0;
    var found = false;
    $scope.addJob = function ()
    {
        $scope.jobInputed2 = angular.uppercase($scope.jobInputed);
        if (!$scope.jobInputed2)
        {
            alert("You can't add empty item!");
            return;
        }
        if (brojac == 0)
        {
            $scope.jobsList = [{jobTodo: $scope.jobInputed2, jobDone: false}];
        }
        else
        {
            for (var i = 0; i < $scope.jobsList.length; i++)
            {
                if ($scope.jobsList[i].jobTodo == $scope.jobInputed2)
                {
                    found = true;
                    break;
                }
                else found = false;
            }
        }
        if (brojac > 0 && !found) {
            $scope.jobsList.push({jobTodo: $scope.jobInputed2, jobDone: false});
        }
        else if (brojac > 0 && found) alert("You are adding item that is already in the list!");
        brojac++;
        $scope.jobInputed = "";
    };/**   end function $scope.addJob  **/

    $scope.JobsDone = function ()
    {
        var helpList = $scope.jobsList;
        $scope.jobsList = [];
        angular.forEach(helpList, function (x)
        {
            if (!x.jobDone) $scope.jobsList.push(x);
            else $scope.jobsDoneList.push(x);
        });
    }; /**       end function $scope.JobsDone   **/

    var counter = 1;
    var button = document.getElementById("ShowHideButton");
    var changeTheValueAttribute = function ()
    {
        if (counter % 2 == 1) button.setAttribute("value", "Show unfinished jobs");
        else button.setAttribute("value", "Show finished jobs");
        counter++;
    };

    var title = document.getElementById("h3title");
    var changeTheTitle = function ()
    {
        if (counter % 2 == 1) title.innerText = "Unfinished jobs: ";
        else title.innerText = "Jobs finished: ";
    };

    if (button != null)
    {
        button.addEventListener("click", changeTheValueAttribute, false);
        button.addEventListener("click", changeTheTitle, false);
    }
}]);