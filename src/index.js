    import heroHeader from "./components/header-hero/heroHeader.js"
    import section from "./components/advantages/section.js"
    import servSection from "./components/servicesSection/servSection.js"
    import facility from "./components/facilities/facility.js"

    let element = document.querySelector(".wrapper")

    const main = document.createElement("main")
    main.classList.add("main")

    element.append(heroHeader())
    element.append(main)
    main.append(servSection())
    main.append(facility())
    main.append(section())
