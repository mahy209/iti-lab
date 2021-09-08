const handleAnswer = (result) => {

    switch(result){
        case "animal-fly":
            changeElementVisibility("fly")
            break;
        case "animal-land":
            changeElementVisibility("land")
            break;
        case "fly-wild":
            changeElementVisibility("eagle")
            break;
        case "fly-peaceful":
            changeElementVisibility("parrot")
            break;
        case "land-sea":
            changeElementVisibility("sea")
            break;
        case "land-ground":
            changeElementVisibility("ground")
            break;
        case "sea-wild":
            changeElementVisibility("shark")
            break;
        case "sea-peaceful":
            changeElementVisibility("dolphin")
            break;
        case "ground-wild":
            changeElementVisibility("lion")
            break;
        case "ground-peaceful":
            changeElementVisibility("cat")
            break;
    }
}

const changeElementVisibility = (element) => {
    document.getElementById(element).style.visibility = "visible";
}