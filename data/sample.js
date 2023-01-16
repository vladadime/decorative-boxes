export const navbarItems = [
    {
        title: "Početna",
        path: "home",
    }, 
    {
        title: "Proizvodi",
        path: "products",
    }, 
    {
        title: "Galerija",
        path: "gallery",
    }, 
];

export const boxTypes = [
    {
        id: 0,
        label: "Pravougaone kutije",
        type: "pravougaone",
        src: "../data/deco-boxes.jpg",
        hasChilds: true,
    },
    {
        id: 1,
        label: "Okrugle kutije",
        type: "okrugle",
        src: "decoBoxes",
        hasChilds: true,
    },
    {
        id: 2,
        label: "Šestougaone kutije",
        type: "sestougaone",
        src: "decoBoxes",
        info: [
            {
                dimension: "16x25",
                prices:[
                    {
                        type: 0,
                        price: 200
                    }, 
                    {
                        type: 1,
                        price: 250
                    },
                    {
                        type: 3,
                        price: 300
                    }
                ],
            },
            {
                dimension: "20x25",
                prices:[
                    {
                        type: 0,
                        price: 200
                    }, 
                    {
                        type: 1,
                        price: 250
                    },
                    {
                        type: 3,
                        price: 300
                    }
                ],
            },
        ],
        hasChilds: false,
    },
    {
        id: 3,
        label: "Kutije za čestitke",
        type: "cestitke",
        src: "decoBoxes",
        types: ["Standard", "Pliš"],
        info: [
            {
                dimension: "16x25",
                prices:[
                    {
                        type: 1,
                        price: 200
                    }, 
                    {
                        type: 2,
                        price: 250
                    }
                ],
            },
            {
                dimension: "20x25",
                prices:[
                    {
                        type: 0,
                        price: 250
                    }, 
                    {
                        type: 1,
                        price: 350
                    }
                ],
            },
        ],
        hasChilds: false,
    },
    {
        id: 4,
        label: "Kutije srca",
        type: "srca",
        src: "decoBoxes",
        types: ["Pliš", "Standard"],
        info: [
            {
                dimension: "16x25",
                prices:[
                    {
                        "Standard": 200
                    },
                    {
                        "Pliš": 250
                    }
                ],
                
            },
            {
                dimension: "20x25",
                prices:[
                    {
                        "Standard": 300
                    },
                    {
                        "Pliš": 350
                    },
                ],
            },
        ],
        hasChilds: false,
    },
    {
        id: 5,
        label: "Kutije za pića",
        type: "pica",
        src: "decoBoxes",
        types: ["Standard", "Pliš"],
        info: [
            {
                dimension: "16x25",
                prices:[
                    {
                        type: 0,
                        price: 200
                    }, 
                    {
                        type: 1,
                        price: 250
                    }
                ],
            },
            {
                dimension: "20x25",
                prices:[
                    {
                        type: 0,
                        price: 250
                    }, 
                    {
                        type: 1,
                        price: 350
                    }
                ],
            },
        ],
        hasChilds: false,
    },
    {
        id: 6,
        label: "Kutije za čokoladice",
        type: "cokoladice",
        src: "decoBoxes",
        types: ["Standard", "Pliš"],
        info: [
            {
                dimension: "16x25",
                prices:[
                    {
                        type: 0,
                        price: 200
                    }, 
                    {
                        type: 1,
                        price: 250
                    }
                ],
            },
            {
                dimension: "20x25",
                prices:[
                    {
                        type: 0,
                        price: 250
                    }, 
                    {
                        type: 1,
                        price: 350
                    }
                ],
            },
        ],
        hasChilds: false,
    },
    {
        id: 7,
        label: "Kutije za nakit",
        type: "nakit",
        src: "decoBoxes",
        types: ["Standard", "Pliš"],
        info: [
            {
                dimension: "16x25",
                prices:[
                    {
                        type: 0,
                        price: 200
                    }, 
                    {
                        type: 1,
                        price: 250
                    }
                ],
            },
            {
                dimension: "20x25",
                prices:[
                    {
                        type: 0,
                        price: 250
                    }, 
                    {
                        type: 1,
                        price: 350
                    }
                ],
            },
        ],
        hasChilds: false,
    },
    {
        id: 8,
        label: "Okrugle kutije klasik",
        type: "okrugle",
        src: "decoBoxes",
        types: ["Standard", "Pliš"],
        info: [
            {
                dimension: "16x25",
                prices:[
                    {
                        type: 0,
                        price: 200
                    }, 
                    {
                        type: 1,
                        price: 250
                    }
                ],
            },
            {
                dimension: "20x25",
                prices:[
                    {
                        type: 0,
                        price: 250
                    }, 
                    {
                        type: 1,
                        price: 350
                    }
                ],
            },
        ],
        boxType_id: 1,
        hasChilds: false,
    },
    {
        id: 9,
        label: "Okrugle kutije bez poklopca",
        type: "okrugle",
        src: "decoBoxes",
        types: ["Standard", "Pliš"],
        info: [
            {
                dimension: "16x25",
                prices:[
                    {
                        type: 0,
                        price: 200
                    }, 
                    {
                        type: 1,
                        price: 250
                    }
                ],
            },
            {
                dimension: "20x25",
                prices:[
                    {
                        type: 0,
                        price: 250
                    }, 
                    {
                        type: 1,
                        price: 350
                    }
                ],
            },
        ],
        boxType_id: 1,
        hasChilds: false,
    },
    {
        id: 10,
        label: "Okrugle kutije sa pregradom",
        type: "okrugle",
        src: "decoBoxes",
        types: ["Standard", "Pliš"],
        info: [
            {
                dimension: "16x25",
                prices:[
                    {
                        type: 0,
                        price: 200
                    }, 
                    {
                        type: 1,
                        price: 250
                    }
                ],
            },
            {
                dimension: "20x25",
                prices:[
                    {
                        type: 0,
                        price: 250
                    }, 
                    {
                        type: 1,
                        price: 350
                    }
                ],
            },
        ],
        boxType_id: 1,
        hasChilds: false,
    },
    {
        id: 11,
        label: "Okrugle kutije bez poklopca sa pregradom",
        type: "okrugle",
        src: "decoBoxes",
        types: ["Standard", "Pliš"],
        info: [
            {
                dimension: "16x25",
                prices:[
                    {
                        type: 0,
                        price: 200
                    }, 
                    {
                        type: 1,
                        price: 250
                    },
                    {
                        
                    },
                    {
                        type: 3,
                        price: 300
                    }
                ],
            },
            {
                dimension: "20x25",
                prices:[
                    {
                        type: 0,
                        price: 250
                    }, 
                    {
                        type: 1,
                        price: 350
                    }
                ],
            },
        ],
        boxType_id: 1,
        hasChilds: false,
    },
    {
        id: 12,
        label: "Pravougaone kutije klasik",
        type: "pravougaone",
        src: "decoBoxes",
        types: ["Standard", "Pliš"],
        info: [
            {
                dimension: "16x25",
                prices:[
                    {
                        type: 0,
                        price: 200
                    }, 
                    {
                        type: 1,
                        price: 250
                    }
                ],
            },
            {
                dimension: "20x25",
                prices:[
                    {
                        type: 0,
                        price: 250
                    }, 
                    {
                        type: 1,
                        price: 350
                    }
                ],
            },
        ],
        boxType_id: 0,
        hasChilds: false,
    },
    {
        id: 13,
        label: "Pravougaone kutije bez poklopca",
        type: "pravougaone",
        src: "decoBoxes",
        types: ["Standard", "Pliš"],
        info: [
            {
                dimension: "16x25",
                prices:[
                    {
                        type: 0,
                        price: 200
                    }, 
                    {
                        type: 1,
                        price: 250
                    }
                ],
            },
            {
                dimension: "20x25",
                prices:[
                    {
                        type: 0,
                        price: 250
                    }, 
                    {
                        type: 1,
                        price: 350
                    }
                ],
            },
        ],
        boxType_id: 0,
        hasChilds: false,
    },
    {
        id: 14,
        label: "Pravougaone kutije sa pregradom",
        type: "pravougaone",
        src: "decoBoxes",
        types: ["Standard", "Pliš"],
        info: [
            {
                dimension: "16x25",
                prices:[
                    {
                        type: 0,
                        price: 200
                    }, 
                    {
                        type: 1,
                        price: 250
                    }
                ],
            },
            {
                dimension: "20x25",
                prices:[
                    {
                        type: 0,
                        price: 250
                    }, 
                    {
                        type: 1,
                        price: 350
                    }
                ],
            },
        ],
        boxType_id: 0,
        hasChilds: false,
    },
    {
        id: 15,
        label: "Pravougaone kutije sa magnetnim zatvaranjem",
        type: "pravougaone",
        src: "decoBoxes",
        types: ["Standard", "Pliš"],
        info: [
            {
                dimension: "16x25",
                prices:[
                    {
                        type: 0,
                        price: 200
                    }, 
                    {
                        type: 1,
                        price: 250
                    }
                ],
            },
            {
                dimension: "20x25",
                prices:[
                    {
                        type: 0,
                        price: 250
                    }, 
                    {
                        type: 1,
                        price: 350
                    }
                ],
            },
        ],
        boxType_id: 0,
        hasChilds: false,
    },
];

export const types = [
    {
        id: 0,
        name: "standard",
        label: "Standard",
    },
    {
        id: 1,
        name: "plis",
        label: "Pliš",
    },
    {
        id: 2,
        name: "hamer",
        label: "Hamer",
    },
    {
        id: 3,
        name: "dekor",
        label: "Sa dekoracijom",
    },
    {
        id: 4,
        name: "reljef",
        label: "Reljef",
    },
    {
        id: 5,
        name: "random",
        label: "Random",
    },
];