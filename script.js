/**
 * LoyerLégal Paris - Client-side Engine
 * 100% in-browser Paris Rent Control Checker & Interactive Leaflet Map
 */

const PARIS_ARRONDISSEMENTS = [{"ar":1,"name":"Louvre","center":[48.8626,2.3364],"rates":{"non_meuble":[33,29.8,27.5,25.8],"meuble":[37.4,33.8,31.2,29.2]},"avgCeilingNM":39.6,"avgCeilingM":44.9,"polygon":[[48.8699,2.328],[48.8682,2.3307],[48.8675,2.3337],[48.8666,2.3374],[48.8657,2.3412],[48.8648,2.3451],[48.8634,2.3509],[48.862,2.3502],[48.8585,2.3482],[48.8573,2.3475],[48.8572,2.3472],[48.857,2.347],[48.8554,2.346],[48.8553,2.3459],[48.8549,2.3429],[48.8556,2.3419],[48.8568,2.3404],[48.8586,2.3366],[48.8601,2.3299],[48.8603,2.3295],[48.8611,2.3271],[48.8617,2.3252],[48.863,2.3209],[48.8636,2.3213],[48.8639,2.3216],[48.8662,2.3233],[48.8665,2.3236],[48.8679,2.3246],[48.869,2.3253],[48.8695,2.3253],[48.8695,2.3257],[48.8699,2.328]],"description":"Palais-Royal, Halles, Place Vendôme","tier":"high"},{"ar":2,"name":"Bourse","center":[48.8683,2.3428],"rates":{"non_meuble":[32.5,29.2,27,25.2],"meuble":[36.8,33.1,30.6,28.5]},"avgCeilingNM":39,"avgCeilingM":44.2,"polygon":[[48.8644,2.3515],[48.8634,2.3509],[48.8644,2.3467],[48.8644,2.3467],[48.8648,2.3451],[48.8657,2.3413],[48.8657,2.3413],[48.8657,2.3412],[48.8657,2.3412],[48.8658,2.3411],[48.8666,2.3374],[48.867,2.3359],[48.867,2.3359],[48.8675,2.3337],[48.868,2.3317],[48.868,2.3317],[48.8682,2.3307],[48.8684,2.3303],[48.8685,2.33],[48.8699,2.328],[48.8702,2.3298],[48.8706,2.3321],[48.871,2.3342],[48.8715,2.337],[48.8715,2.3371],[48.8719,2.3397],[48.872,2.3399],[48.872,2.34],[48.8715,2.3431],[48.8707,2.3479],[48.87,2.351],[48.8697,2.3526],[48.8693,2.3543],[48.867,2.353],[48.8662,2.3525],[48.8652,2.352],[48.8644,2.3515]],"description":"Bourse, Sentier, Montorgueil, Grands Boulevards","tier":"high"},{"ar":3,"name":"Temple","center":[48.8629,2.36],"rates":{"non_meuble":[32.8,29.5,27.2,25.5],"meuble":[37.2,33.5,30.9,28.9]},"avgCeilingNM":39.4,"avgCeilingM":44.6,"polygon":[[48.8675,2.3638],[48.8675,2.3639],[48.8674,2.364],[48.8673,2.3641],[48.8673,2.3642],[48.8672,2.3643],[48.867,2.3644],[48.8669,2.3645],[48.8668,2.3645],[48.8668,2.3645],[48.8665,2.3647],[48.8664,2.3648],[48.8647,2.3658],[48.8646,2.3658],[48.8631,2.3667],[48.8631,2.3668],[48.8625,2.3669],[48.8609,2.3673],[48.8595,2.3676],[48.8569,2.3682],[48.8558,2.3685],[48.8564,2.3645],[48.8569,2.3628],[48.8577,2.3607],[48.8584,2.3593],[48.859,2.3584],[48.8601,2.3569],[48.8613,2.3533],[48.862,2.3502],[48.8634,2.3509],[48.8644,2.3515],[48.8662,2.3525],[48.8693,2.3543],[48.8689,2.3561],[48.8687,2.3573],[48.8684,2.3597],[48.8679,2.3626],[48.8679,2.363],[48.8679,2.3632],[48.8678,2.3633],[48.8676,2.3636],[48.8676,2.3637],[48.8675,2.3638],[48.8675,2.3638]],"description":"Temple, Haut-Marais, Arts-et-Métiers","tier":"high"},{"ar":4,"name":"Hôtel-de-Ville","center":[48.8543,2.3576],"rates":{"non_meuble":[33.5,30.2,27.8,26],"meuble":[38,34.2,31.5,29.5]},"avgCeilingNM":40.2,"avgCeilingM":45.6,"polygon":[[48.8557,2.3685],[48.8533,2.3691],[48.8532,2.3691],[48.853,2.3691],[48.8523,2.3687],[48.852,2.3686],[48.8516,2.3684],[48.8507,2.368],[48.8474,2.3665],[48.8471,2.366],[48.8469,2.3657],[48.8468,2.3655],[48.8467,2.3654],[48.8482,2.3615],[48.8492,2.3597],[48.8496,2.3589],[48.8498,2.3581],[48.8507,2.3556],[48.8513,2.3532],[48.852,2.35],[48.8521,2.3496],[48.8533,2.3469],[48.854,2.3447],[48.8553,2.3459],[48.8567,2.3468],[48.8572,2.3472],[48.8573,2.3476],[48.8607,2.3495],[48.8612,2.3535],[48.8587,2.3588],[48.8573,2.3618],[48.8557,2.3685]],"description":"Hôtel-de-Ville, Marais Sud, Île de la Cité, Île Saint-Louis","tier":"high"},{"ar":5,"name":"Panthéon","center":[48.8444,2.3507],"rates":{"non_meuble":[33,29.6,27.4,25.6],"meuble":[37.4,33.6,31.1,29]},"avgCeilingNM":39.6,"avgCeilingM":44.9,"polygon":[[48.8461,2.3644],[48.8444,2.3651],[48.8443,2.3649],[48.8441,2.3649],[48.844,2.3648],[48.8437,2.3646],[48.8399,2.3616],[48.8384,2.357],[48.8368,2.3519],[48.8368,2.3518],[48.8373,2.3472],[48.8384,2.3421],[48.8401,2.3368],[48.8407,2.3368],[48.8407,2.337],[48.8408,2.3372],[48.8417,2.3378],[48.8463,2.3403],[48.8473,2.3408],[48.8504,2.3427],[48.854,2.3446],[48.8533,2.3469],[48.8522,2.3494],[48.852,2.35],[48.8514,2.3525],[48.8507,2.3555],[48.8499,2.3581],[48.8497,2.3585],[48.8493,2.3596],[48.8486,2.3608],[48.8461,2.3644]],"description":"Panthéon, Quartier Latin, Val-de-Grâce, Sorbonne","tier":"high"},{"ar":6,"name":"Luxembourg","center":[48.8491,2.3329],"rates":{"non_meuble":[34.5,31.2,28.8,27.2],"meuble":[39.2,35.4,32.7,30.8]},"avgCeilingNM":41.4,"avgCeilingM":47,"polygon":[[48.854,2.3446],[48.8528,2.3438],[48.8504,2.3427],[48.8484,2.3415],[48.8473,2.3408],[48.8467,2.3405],[48.8463,2.3403],[48.8425,2.3382],[48.8417,2.3378],[48.8409,2.3373],[48.8408,2.3372],[48.8408,2.3371],[48.8407,2.337],[48.8407,2.3369],[48.8407,2.3368],[48.8406,2.3368],[48.8401,2.3368],[48.8406,2.3338],[48.8417,2.3305],[48.8428,2.3271],[48.8436,2.3247],[48.8441,2.3231],[48.8451,2.3202],[48.8468,2.3166],[48.8477,2.3191],[48.8482,2.3201],[48.8484,2.3205],[48.8496,2.3229],[48.8502,2.3241],[48.8513,2.3266],[48.8516,2.3272],[48.8526,2.3293],[48.8544,2.3304],[48.855,2.3307],[48.8556,2.3311],[48.8576,2.3328],[48.8582,2.3332],[48.8585,2.3324],[48.8586,2.3366],[48.8568,2.3404],[48.8568,2.3405],[48.8556,2.3419],[48.8549,2.3428],[48.854,2.3446]],"description":"Saint-Germain-des-Prés, Odéon, Jardin du Luxembourg","tier":"high"},{"ar":7,"name":"Palais-Bourbon","center":[48.8562,2.3122],"rates":{"non_meuble":[34.2,30.9,28.5,27],"meuble":[38.8,35,32.3,30.5]},"avgCeilingNM":41,"avgCeilingM":46.6,"polygon":[[48.8512,2.3009],[48.8545,2.2957],[48.8577,2.2906],[48.8578,2.2906],[48.8578,2.2905],[48.8579,2.2904],[48.8579,2.2904],[48.8579,2.2903],[48.8596,2.2916],[48.8615,2.2942],[48.8623,2.2959],[48.8626,2.2965],[48.8627,2.2971],[48.8631,2.2986],[48.8633,2.2998],[48.8635,2.3011],[48.8635,2.302],[48.8636,2.3104],[48.8638,2.3186],[48.8634,2.3199],[48.8619,2.3247],[48.8607,2.3283],[48.8601,2.3299],[48.8576,2.3328],[48.8544,2.3304],[48.8513,2.3266],[48.8484,2.3205],[48.8468,2.3166],[48.8473,2.3116],[48.8474,2.3082],[48.8512,2.3009]],"description":"Palais-Bourbon, Tour Eiffel, Invalides, Saint-Thomas-d'Aquin","tier":"high"},{"ar":8,"name":"Élysée","center":[48.8727,2.3126],"rates":{"non_meuble":[32.5,29.4,27.2,25.8],"meuble":[36.9,33.3,30.8,29.2]},"avgCeilingNM":39,"avgCeilingM":44.3,"polygon":[[48.8696,2.3258],[48.8681,2.3247],[48.8651,2.3225],[48.8632,2.3203],[48.8638,2.3185],[48.8635,2.3054],[48.8653,2.3],[48.871,2.2975],[48.8737,2.2951],[48.8737,2.2951],[48.8737,2.2951],[48.8737,2.2951],[48.8737,2.2951],[48.8737,2.2951],[48.8737,2.2951],[48.8737,2.2951],[48.8737,2.2951],[48.8737,2.2951],[48.8737,2.2951],[48.8738,2.2951],[48.8738,2.2951],[48.8741,2.2953],[48.8782,2.2987],[48.8813,2.3165],[48.8819,2.3196],[48.8827,2.3233],[48.8829,2.3242],[48.8831,2.3255],[48.8808,2.3271],[48.8739,2.327],[48.8706,2.3261],[48.8696,2.3258]],"description":"Champs-Élysées, Madeleine, Faubourg-du-Roule, Europe","tier":"high"},{"ar":9,"name":"Opéra","center":[48.8772,2.3375],"rates":{"non_meuble":[30.8,27.8,25.6,24],"meuble":[35,31.5,29,27.2]},"avgCeilingNM":37,"avgCeilingM":42,"polygon":[[48.882,2.3398],[48.8824,2.3419],[48.8829,2.3444],[48.8834,2.3466],[48.8834,2.3468],[48.8834,2.3471],[48.8837,2.3493],[48.8822,2.3497],[48.8797,2.3495],[48.8785,2.3492],[48.8766,2.3487],[48.874,2.3479],[48.8715,2.3431],[48.8719,2.3397],[48.871,2.3342],[48.8699,2.328],[48.8696,2.3258],[48.8713,2.3263],[48.8733,2.3269],[48.8737,2.3271],[48.8742,2.3269],[48.8778,2.3269],[48.8796,2.327],[48.8821,2.3271],[48.8835,2.3274],[48.8836,2.3278],[48.884,2.3285],[48.8844,2.3293],[48.8843,2.3305],[48.8838,2.3324],[48.8838,2.3326],[48.8831,2.3349],[48.8825,2.337],[48.8824,2.3373],[48.8823,2.3379],[48.8821,2.3396],[48.882,2.3398]],"description":"Opéra Garnier, Chaussée-d'Antin, Saint-Georges, Pigalle","tier":"mid"},{"ar":10,"name":"Entrepôt","center":[48.8761,2.3607],"rates":{"non_meuble":[28.8,25.8,23.6,22.2],"meuble":[32.6,29.2,26.8,25.2]},"avgCeilingNM":34.6,"avgCeilingM":39.1,"polygon":[[48.8844,2.3647],[48.8842,2.3676],[48.8841,2.3681],[48.8841,2.3684],[48.884,2.3687],[48.8839,2.3688],[48.8838,2.3688],[48.8835,2.369],[48.8833,2.3692],[48.8831,2.3694],[48.8828,2.37],[48.8827,2.3702],[48.8827,2.3702],[48.8827,2.3702],[48.8823,2.3702],[48.8801,2.3703],[48.878,2.3703],[48.8745,2.3742],[48.8737,2.3752],[48.8706,2.3731],[48.8688,2.3674],[48.8676,2.3638],[48.8679,2.3632],[48.8685,2.359],[48.87,2.351],[48.8774,2.3491],[48.8811,2.3498],[48.8838,2.3503],[48.8841,2.3541],[48.8843,2.3573],[48.8844,2.3595],[48.8844,2.364],[48.8844,2.3647]],"description":"Canal Saint-Martin, République, Gare de l'Est, Gare du Nord","tier":"mid"},{"ar":11,"name":"Popincourt","center":[48.8591,2.3801],"rates":{"non_meuble":[29.4,26.5,24.2,22.8],"meuble":[33.3,30,27.5,25.8]},"avgCeilingNM":35.3,"avgCeilingM":40,"polygon":[[48.8542,2.3962],[48.8513,2.3984],[48.8505,2.3987],[48.8498,2.399],[48.8481,2.3989],[48.8483,2.3965],[48.8494,2.3895],[48.8506,2.3788],[48.8524,2.372],[48.8526,2.3714],[48.8532,2.3704],[48.8533,2.3703],[48.8532,2.3691],[48.8537,2.369],[48.8595,2.3676],[48.8631,2.3668],[48.8647,2.3658],[48.8668,2.3645],[48.867,2.3644],[48.8673,2.3641],[48.8675,2.3638],[48.8689,2.3679],[48.8708,2.3736],[48.872,2.3771],[48.8701,2.3792],[48.8672,2.3831],[48.8664,2.3835],[48.8652,2.3849],[48.8631,2.3873],[48.8629,2.3875],[48.86,2.3889],[48.8586,2.3896],[48.8585,2.3897],[48.8566,2.3944],[48.8543,2.3961],[48.8542,2.3962]],"description":"Bastille, République, Voltaire, Oberkampf, Roquette","tier":"mid"},{"ar":12,"name":"Reuilly","center":[48.835,2.4213],"rates":{"non_meuble":[27.5,24.6,22.5,21.2],"meuble":[31.2,27.9,25.5,24]},"avgCeilingNM":33,"avgCeilingM":37.4,"polygon":[[48.8336,2.4139],[48.8369,2.4216],[48.8427,2.4196],[48.8431,2.4199],[48.8443,2.4224],[48.8418,2.4247],[48.8458,2.4465],[48.8425,2.4624],[48.84,2.4665],[48.8366,2.4697],[48.8345,2.4693],[48.8332,2.4677],[48.8309,2.4651],[48.8263,2.4658],[48.817,2.4571],[48.8184,2.4395],[48.8195,2.4365],[48.8196,2.4351],[48.8195,2.4348],[48.8242,2.4256],[48.8244,2.4187],[48.8248,2.4139],[48.8254,2.4097],[48.8291,2.4039],[48.8276,2.3876],[48.836,2.3771],[48.8507,2.368],[48.8526,2.3714],[48.8477,2.4035],[48.8433,2.4151],[48.8338,2.4116],[48.8336,2.4139]],"description":"Reuilly, Nation, Bercy, Daumesnil, Bel-Air","tier":"low"},{"ar":13,"name":"Gobelins","center":[48.8284,2.3623],"rates":{"non_meuble":[26.8,24,22,20.6],"meuble":[30.4,27.2,25,23.4]},"avgCeilingNM":32.2,"avgCeilingM":36.5,"polygon":[[48.838,2.3749],[48.8302,2.3844],[48.8296,2.3852],[48.8287,2.3862],[48.8279,2.3872],[48.8257,2.3902],[48.8247,2.3879],[48.8237,2.3852],[48.8217,2.3808],[48.821,2.3787],[48.8195,2.3741],[48.8185,2.3709],[48.8173,2.3673],[48.816,2.3611],[48.816,2.3568],[48.8175,2.3538],[48.8185,2.3524],[48.8173,2.3499],[48.816,2.3454],[48.8157,2.3443],[48.817,2.344],[48.8178,2.3441],[48.8227,2.3417],[48.827,2.3416],[48.8322,2.3411],[48.8373,2.347],[48.8368,2.3518],[48.8399,2.3616],[48.844,2.3648],[48.8443,2.365],[48.8402,2.3724],[48.838,2.3749]],"description":"Place d'Italie, Gobelins, Tolbiac, Olympiades, BNF","tier":"low"},{"ar":14,"name":"Observatoire","center":[48.8292,2.3265],"rates":{"non_meuble":[28.5,25.5,23.4,22],"meuble":[32.3,28.9,26.5,24.9]},"avgCeilingNM":34.2,"avgCeilingM":38.8,"polygon":[[48.8406,2.3338],[48.8368,2.3419],[48.8318,2.3411],[48.8281,2.3416],[48.8263,2.3417],[48.8221,2.342],[48.8194,2.3446],[48.8175,2.3441],[48.8169,2.344],[48.8158,2.344],[48.8166,2.3371],[48.8171,2.3318],[48.8182,2.3324],[48.8189,2.3293],[48.8194,2.3269],[48.8198,2.3254],[48.821,2.3201],[48.8214,2.3181],[48.8222,2.3145],[48.8233,2.3095],[48.8236,2.3082],[48.8249,2.3024],[48.8251,2.3017],[48.8252,2.3013],[48.8261,2.3024],[48.8292,2.3062],[48.833,2.3108],[48.8383,2.3172],[48.8398,2.3214],[48.8431,2.3264],[48.8406,2.3338]],"description":"Observatoire, Montparnasse, Denfert-Rochereau, Alésia","tier":"mid"},{"ar":15,"name":"Vaugirard","center":[48.8401,2.2928],"rates":{"non_meuble":[29,26,23.8,22.4],"meuble":[32.9,29.5,27,25.4]},"avgCeilingNM":34.8,"avgCeilingM":39.5,"polygon":[[48.8522,2.2993],[48.848,2.3105],[48.8467,2.3161],[48.8411,2.3216],[48.8383,2.3172],[48.8311,2.3085],[48.8261,2.3024],[48.8252,2.3011],[48.8261,2.297],[48.827,2.2928],[48.8277,2.2909],[48.8295,2.2867],[48.8314,2.2818],[48.8305,2.2767],[48.8282,2.2731],[48.828,2.2676],[48.8317,2.2676],[48.833,2.27],[48.8346,2.2679],[48.8343,2.2652],[48.8339,2.263],[48.8421,2.271],[48.8466,2.2754],[48.8505,2.2801],[48.853,2.2837],[48.8557,2.2875],[48.8565,2.2883],[48.8576,2.2891],[48.8579,2.2904],[48.8578,2.2905],[48.8578,2.2905],[48.8577,2.2906],[48.8531,2.2979],[48.8522,2.2993]],"description":"Vaugirard, Convention, Grenelle, Commerce, Javel","tier":"mid"},{"ar":16,"name":"Passy","center":[48.8604,2.262],"rates":{"non_meuble":[31.8,28.6,26.4,25],"meuble":[36,32.4,29.9,28.3]},"avgCeilingNM":38.2,"avgCeilingM":43.2,"polygon":[[48.8784,2.2743],[48.8775,2.2834],[48.8739,2.2945],[48.8738,2.2951],[48.8737,2.2951],[48.8737,2.2951],[48.8737,2.2951],[48.8737,2.2951],[48.8737,2.2951],[48.8737,2.2951],[48.8696,2.2983],[48.8633,2.2998],[48.8626,2.2966],[48.8611,2.2936],[48.8569,2.2886],[48.8546,2.2859],[48.8502,2.2797],[48.8409,2.2698],[48.8346,2.257],[48.8439,2.2517],[48.8468,2.2462],[48.8496,2.2403],[48.8499,2.2398],[48.8501,2.2394],[48.8529,2.2266],[48.8597,2.2258],[48.8706,2.2358],[48.8717,2.2401],[48.8724,2.2412],[48.8767,2.2567],[48.8788,2.271],[48.8784,2.2743]],"description":"Passy, Auteuil, Muette, Porte Dauphine","tier":"high"},{"ar":17,"name":"Batignolles-Monceau","center":[48.8873,2.3068],"rates":{"non_meuble":[29.8,26.8,24.6,23.2],"meuble":[33.8,30.4,27.9,26.3]},"avgCeilingNM":35.8,"avgCeilingM":40.6,"polygon":[[48.874,2.2952],[48.876,2.288],[48.8775,2.2834],[48.8794,2.2801],[48.8806,2.2804],[48.8827,2.2809],[48.8838,2.2821],[48.8866,2.2857],[48.8895,2.2919],[48.8898,2.2943],[48.8903,2.2959],[48.8914,2.298],[48.8917,2.2986],[48.893,2.3012],[48.8946,2.3048],[48.896,2.3076],[48.8969,2.31],[48.8981,2.3134],[48.8992,2.3171],[48.8998,2.3188],[48.9008,2.3204],[48.9009,2.3237],[48.901,2.3266],[48.9004,2.3299],[48.8931,2.3274],[48.8875,2.3256],[48.8834,2.3267],[48.8829,2.3243],[48.8828,2.324],[48.8821,2.3205],[48.8816,2.3179],[48.8803,2.3086],[48.8781,2.2982],[48.874,2.2952]],"description":"Batignolles, Ternes, Épinettes, Plaine-de-Monceaux","tier":"mid"},{"ar":18,"name":"Buttes-Montmartre","center":[48.8926,2.3482],"rates":{"non_meuble":[26.5,23.6,21.6,20.2],"meuble":[30,26.8,24.5,23]},"avgCeilingNM":31.8,"avgCeilingM":36,"polygon":[[48.8855,2.3658],[48.8844,2.3615],[48.8844,2.3593],[48.8842,2.3557],[48.8838,2.351],[48.8837,2.3497],[48.8834,2.347],[48.8829,2.3444],[48.882,2.3397],[48.8824,2.3373],[48.8831,2.3349],[48.8839,2.3321],[48.8844,2.3291],[48.8835,2.3274],[48.888,2.3258],[48.8956,2.3283],[48.9003,2.3299],[48.9011,2.3313],[48.9012,2.3365],[48.9012,2.338],[48.9013,2.3433],[48.9014,2.3472],[48.9015,2.352],[48.9015,2.3544],[48.9016,2.3586],[48.9017,2.3614],[48.9018,2.3656],[48.9019,2.37],[48.9016,2.3702],[48.8977,2.3703],[48.8959,2.3713],[48.8946,2.3705],[48.8874,2.3671],[48.8855,2.3658]],"description":"Montmartre, Abbesses, Lamarck, Goutte d'Or, Chapelle","tier":"low"},{"ar":19,"name":"Buttes-Chaumont","center":[48.8871,2.3848],"rates":{"non_meuble":[25.2,22.4,20.5,19.2],"meuble":[28.6,25.4,23.2,21.8]},"avgCeilingNM":30.2,"avgCeilingM":34.3,"polygon":[[48.9012,2.3894],[48.8976,2.3959],[48.8884,2.3992],[48.8859,2.3992],[48.8841,2.3999],[48.8826,2.4016],[48.8809,2.4063],[48.8786,2.4107],[48.8779,2.4089],[48.877,2.406],[48.8755,2.392],[48.8746,2.3868],[48.8733,2.3819],[48.874,2.3748],[48.8784,2.3703],[48.8816,2.3702],[48.8827,2.3702],[48.8828,2.3701],[48.8831,2.3694],[48.8834,2.369],[48.8839,2.3688],[48.884,2.3687],[48.8841,2.3684],[48.8842,2.3679],[48.886,2.3662],[48.8954,2.3718],[48.8977,2.3703],[48.9018,2.3703],[48.902,2.3784],[48.9021,2.381],[48.9013,2.3888],[48.9012,2.3894]],"description":"Buttes-Chaumont, La Villette, Bassin de la Villette","tier":"low"},{"ar":20,"name":"Ménilmontant","center":[48.8635,2.4012],"rates":{"non_meuble":[25.6,22.8,20.8,19.5],"meuble":[29,25.8,23.6,22.1]},"avgCeilingNM":30.7,"avgCeilingM":34.8,"polygon":[[48.8755,2.4128],[48.8732,2.4134],[48.8708,2.4138],[48.8673,2.414],[48.8646,2.4139],[48.862,2.4141],[48.8552,2.4153],[48.8521,2.4158],[48.8492,2.4164],[48.8467,2.4155],[48.847,2.4117],[48.8472,2.4095],[48.8481,2.3994],[48.8504,2.3988],[48.8513,2.3984],[48.8543,2.3961],[48.8584,2.39],[48.8586,2.3895],[48.8628,2.3875],[48.8631,2.3873],[48.8662,2.3837],[48.8673,2.383],[48.8711,2.378],[48.8729,2.3802],[48.8738,2.3851],[48.8747,2.3882],[48.8755,2.392],[48.876,2.4025],[48.8777,2.4084],[48.878,2.4094],[48.878,2.4112],[48.8772,2.4118],[48.8764,2.4125],[48.8755,2.4128]],"description":"Ménilmontant, Belleville, Père-Lachaise, Gambetta","tier":"low"}];

// State management
const AppState = {
  selectedArrondissement: 11, // Default 11e
  map: null,
  polygonLayers: {},
  markerLayers: {},
  activeResult: null
};

// Initialize Application once DOM is loaded (Single Entry Point)
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initFormElements();
  initMap();
  initCalculator();
  initLetterGenerator();
  initBannerModal();
  initModals();

  // Run initial calculation with default values for instant preview
  calculateRent(false);
});

/* ==========================================================================
   Navigation & Mobile Menu
   ========================================================================== */
function initNavigation() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const mainNav = document.getElementById('mainNav');

  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      const isOpen = mainNav.classList.contains('active');
      toggleBtn.setAttribute('aria-expanded', isOpen);
      toggleBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });

    mainNav.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }
}

/* ==========================================================================
   Interactive Leaflet Map
   ========================================================================== */
function initMap() {
  const mapElement = document.getElementById('parisMap');
  if (!mapElement || typeof L === 'undefined') return;

  AppState.map = L.map('parisMap', {
    center: [48.8566, 2.3522],
    zoom: 12,
    minZoom: 11,
    maxZoom: 16,
    scrollWheelZoom: false
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" target="_blank">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(AppState.map);

  function getPolygonStyle(item, isActive = false) {
    let fillColor = '#3b82f6';
    if (item.tier === 'high') fillColor = '#ef4444';
    else if (item.tier === 'mid') fillColor = '#f59e0b';
    else fillColor = '#0284c7';

    if (isActive) {
      return {
        fillColor: '#1d4ed8',
        fillOpacity: 0.55,
        color: '#1d4ed8',
        weight: 3.5,
        opacity: 1
      };
    }

    return {
      fillColor: fillColor,
      fillOpacity: 0.22,
      color: '#334155',
      weight: 1.5,
      opacity: 0.8
    };
  }

  PARIS_ARRONDISSEMENTS.forEach(item => {
    const polygon = L.polygon(item.polygon, getPolygonStyle(item)).addTo(AppState.map);
    const suffix = item.ar === 1 ? '1er' : item.ar + 'e';

    polygon.bindTooltip(
      '<strong>' + suffix + ' arr. - ' + item.name + '</strong><br>' +
      '<small>' + item.description + '</small><br>' +
      'Plafond meublé : ~' + item.avgCeilingM.toFixed(1) + ' €/m²',
      { sticky: true, className: 'map-tooltip' }
    );

    polygon.on('mouseover', () => {
      if (AppState.selectedArrondissement !== item.ar) {
        polygon.setStyle({ fillOpacity: 0.42, weight: 2.5 });
      }
    });

    polygon.on('mouseout', () => {
      if (AppState.selectedArrondissement !== item.ar) {
        polygon.setStyle(getPolygonStyle(item, false));
      }
    });

    polygon.on('click', () => {
      selectArrondissement(item.ar, true);
    });

    AppState.polygonLayers[item.ar] = polygon;

    const customIcon = L.divIcon({
      className: 'arrondissement-pin-wrap',
      html: '<div class="arrondissement-pin" id="pin-' + item.ar + '">' + suffix + '</div>',
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });

    const marker = L.marker(item.center, { icon: customIcon }).addTo(AppState.map);
    marker.on('click', () => {
      selectArrondissement(item.ar, true);
    });

    AppState.markerLayers[item.ar] = marker;
  });

  selectArrondissement(AppState.selectedArrondissement, false);
  initMapChips();
}

function initMapChips() {
  const container = document.getElementById('arrondissementChips');
  if (!container) return;

  container.innerHTML = '';
  PARIS_ARRONDISSEMENTS.forEach(item => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip-btn' + (item.ar === AppState.selectedArrondissement ? ' active' : '');
    chip.textContent = item.ar === 1 ? '1er' : item.ar + 'e';
    chip.title = item.name + ' - ' + item.description;
    chip.id = 'chip-' + item.ar;

    chip.addEventListener('click', () => {
      selectArrondissement(item.ar, true);
    });

    container.appendChild(chip);
  });
}

function selectArrondissement(arNumber, shouldScroll = false) {
  const item = PARIS_ARRONDISSEMENTS.find(a => a.ar === arNumber);
  if (!item) return;

  AppState.selectedArrondissement = arNumber;

  PARIS_ARRONDISSEMENTS.forEach(other => {
    const poly = AppState.polygonLayers[other.ar];
    if (poly) {
      if (other.ar === arNumber) {
        poly.setStyle({
          fillColor: '#1d4ed8',
          fillOpacity: 0.55,
          color: '#1d4ed8',
          weight: 3.5,
          opacity: 1
        });
        poly.bringToFront();
      } else {
        let defaultFill = other.tier === 'high' ? '#ef4444' : other.tier === 'mid' ? '#f59e0b' : '#0284c7';
        poly.setStyle({
          fillColor: defaultFill,
          fillOpacity: 0.22,
          color: '#334155',
          weight: 1.5,
          opacity: 0.8
        });
      }
    }

    const pinEl = document.getElementById('pin-' + other.ar);
    if (pinEl) {
      if (other.ar === arNumber) pinEl.classList.add('active');
      else pinEl.classList.remove('active');
    }

    const chipEl = document.getElementById('chip-' + other.ar);
    if (chipEl) {
      if (other.ar === arNumber) {
        chipEl.classList.add('active');
        chipEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } else {
        chipEl.classList.remove('active');
      }
    }
  });

  const activePoly = AppState.polygonLayers[arNumber];
  if (activePoly && AppState.map) {
    const suffix = arNumber === 1 ? '1er' : arNumber + 'e';
    const popupHtml = `
      <div class="custom-leaflet-popup">
        <div class="map-popup-title">${suffix} arr. &bull; ${item.name}</div>
        <div class="map-popup-sub">${item.description}</div>
        <div class="map-popup-rates">
          <div class="popup-rate-row"><span>Plafond non meublé (1p) :</span><strong>${item.avgCeilingNM.toFixed(1)} €/m²</strong></div>
          <div class="popup-rate-row"><span>Plafond meublé (1p) :</span><strong>${item.avgCeilingM.toFixed(1)} €/m²</strong></div>
        </div>
        <button type="button" class="btn-popup-select" onclick="applyArrondissementAndScroll(${arNumber})">
          <i class="fa-solid fa-calculator"></i> Appliquer au simulateur
        </button>
      </div>
    `;
    activePoly.bindPopup(popupHtml).openPopup(item.center);
  }

  updateMapInfoPanel(item);

  const selectEl = document.getElementById('formArrondissement');
  if (selectEl && selectEl.value !== String(arNumber)) {
    selectEl.value = String(arNumber);
  }

  updatePostalCodeFromArrondissement(arNumber);

  if (shouldScroll && AppState.activeResult) {
    calculateRent(false);
  }
}

window.applyArrondissementAndScroll = function(arNumber) {
  selectArrondissement(arNumber, false);
  const sim = document.getElementById('simulateur');
  if (sim) sim.scrollIntoView({ behavior: 'smooth' });
};

function updateMapInfoPanel(item) {
  const panelNumber = document.getElementById('infoPanelNumber');
  const panelName = document.getElementById('infoPanelName');
  const panelDesc = document.getElementById('infoPanelDesc');
  const panelCeilingNM = document.getElementById('infoPanelCeilingNM');
  const panelCeilingM = document.getElementById('infoPanelCeilingM');

  const suffix = item.ar === 1 ? '1er' : item.ar + 'e';
  if (panelNumber) panelNumber.textContent = suffix;
  if (panelName) panelName.textContent = suffix + ' arrondissement • ' + item.name;
  if (panelDesc) panelDesc.textContent = item.description;
  if (panelCeilingNM) panelCeilingNM.textContent = item.avgCeilingNM.toFixed(1) + ' € / m²';
  if (panelCeilingM) panelCeilingM.textContent = item.avgCeilingM.toFixed(1) + ' € / m²';
}

function updatePostalCodeFromArrondissement(arNumber) {
  const postalInput = document.getElementById('inputTenantPostal');
  if (postalInput) {
    const formatted = arNumber < 10 ? '7500' + arNumber : '750' + arNumber;
    postalInput.value = formatted;
  }
}

/* ==========================================================================
   Form Initialization & Handlers
   ========================================================================== */
function initFormElements() {
  const selectArrondissement = document.getElementById('formArrondissement');
  if (selectArrondissement) {
    selectArrondissement.innerHTML = '';
    PARIS_ARRONDISSEMENTS.forEach(item => {
      const opt = document.createElement('option');
      opt.value = String(item.ar);
      const suffix = item.ar === 1 ? '1er' : item.ar + 'ème';
      opt.textContent = suffix + ' arrondissement - ' + item.name + ' (' + item.description + ')';
      selectArrondissement.appendChild(opt);
    });

    selectArrondissement.value = String(AppState.selectedArrondissement);

    selectArrondissement.addEventListener('change', (e) => {
      selectArrondissement(parseInt(e.target.value, 10), false);
    });
  }

  const btnApply = document.getElementById('btnApplyArrondissement');
  if (btnApply) {
    btnApply.addEventListener('click', () => {
      const sim = document.getElementById('simulateur');
      if (sim) sim.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const presetStudio = document.getElementById('presetStudioOver');
  if (presetStudio) {
    presetStudio.addEventListener('click', () => {
      selectArrondissement(11, false);
      setRadioValue('locationType', 'meuble');
      setRadioValue('roomCount', '1');
      document.getElementById('formSurface').value = '20';
      document.getElementById('formRentCurrent').value = '1150';
      document.getElementById('formLeaseDate').value = '2024-01-01';
      calculateRent(true);
    });
  }

  const presetT2 = document.getElementById('presetT2Legal');
  if (presetT2) {
    presetT2.addEventListener('click', () => {
      selectArrondissement(15, false);
      setRadioValue('locationType', 'non_meuble');
      setRadioValue('roomCount', '2');
      document.getElementById('formSurface').value = '45';
      document.getElementById('formRentCurrent').value = '1100';
      document.getElementById('formLeaseDate').value = '2024-01-01';
      calculateRent(true);
    });
  }

  const form = document.getElementById('rentForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      calculateRent(true);
    });
  }
}

function setRadioValue(name, value) {
  const radio = document.querySelector('input[name="' + name + '"][value="' + value + '"]');
  if (radio) {
    radio.checked = true;
    radio.dispatchEvent(new Event('change'));
  }
}

function getRadioValue(name) {
  const radio = document.querySelector('input[name="' + name + '"]:checked');
  return radio ? radio.value : null;
}

/* ==========================================================================
   Rent Calculation Logic & Dashboard Update
   ========================================================================== */
function initCalculator() {
  const inputs = ['formSurface', 'formRentCurrent', 'formLeaseDate', 'formRentComplement'];
  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => {
        if (AppState.activeResult) calculateRent(false);
      });
    }
  });

  document.querySelectorAll('input[name="locationType"], input[name="roomCount"]').forEach(radio => {
    radio.addEventListener('change', () => {
      if (AppState.activeResult) calculateRent(false);
    });
  });

  const calcBtn = document.getElementById('btnCalculate');
  if (calcBtn) {
    calcBtn.addEventListener('click', (e) => {
      e.preventDefault();
      calculateRent(true);
    });
  }
}

function calculateRent(shouldScroll = false) {
  const arSelect = document.getElementById('formArrondissement');
  if (!arSelect) return;

  const arNumber = parseInt(arSelect.value, 10);
  const locationType = getRadioValue('locationType') || 'non_meuble';
  const roomCount = parseInt(getRadioValue('roomCount') || '1', 10);
  const surface = parseFloat(document.getElementById('formSurface')?.value);
  const currentRent = parseFloat(document.getElementById('formRentCurrent')?.value);
  const rentComplement = parseFloat(document.getElementById('formRentComplement')?.value || 0) || 0;
  const leaseDateVal = document.getElementById('formLeaseDate')?.value || '2024-01-01';

  if (isNaN(surface) || surface <= 0 || isNaN(currentRent) || currentRent <= 0) {
    return;
  }

  const arData = PARIS_ARRONDISSEMENTS.find(a => a.ar === arNumber);
  if (!arData) return;

  const roomIndex = Math.min(Math.max(roomCount - 1, 0), 3);
  const refRent = arData.rates[locationType][roomIndex];
  const ceilingRent = Math.round(refRent * 1.20 * 10) / 10;
  const minRent = Math.round(refRent * 0.70 * 10) / 10;

  const legalMaxMonthly = Math.round(ceilingRent * surface * 100) / 100;
  const currentRentPerSqm = Math.round((currentRent / surface) * 100) / 100;

  const excessMonthly = Math.max(0, Math.round((currentRent - legalMaxMonthly) * 100) / 100);
  const excessAnnual = Math.round(excessMonthly * 12 * 100) / 100;

  let elapsedMonths = 12;
  if (leaseDateVal) {
    const leaseDate = new Date(leaseDateVal);
    const now = new Date();
    if (!isNaN(leaseDate.getTime())) {
      const yearDiff = now.getFullYear() - leaseDate.getFullYear();
      const monthDiff = now.getMonth() - leaseDate.getMonth();
      const totalMonths = yearDiff * 12 + monthDiff;
      elapsedMonths = Math.min(Math.max(totalMonths, 1), 36);
    }
  }

  const totalRefund = Math.round(excessMonthly * elapsedMonths * 100) / 100;
  const isIllegal = excessMonthly > 0;

  // تحديث شريط التنبيه بالاسترجاع بأثر رجعي
  const banner = document.getElementById('retro-recovery-banner');
  const textSpan = document.getElementById('retro-recovery-text');

  if (banner && textSpan) {
    if (isIllegal) {
      const maxRetroAmount = Math.round(excessMonthly * 36).toLocaleString('fr-FR');
      textSpan.innerHTML = `Loyer illégal : Jusqu'à <strong>${maxRetroAmount} €</strong> de trop-perçu à récupérer sur 3 ans (loi ÉLAN)`;
      banner.style.display = 'block';
    } else {
      banner.style.display = 'none';
    }
  }

  AppState.activeResult = {
    arData,
    arNumber,
    locationType,
    roomCount,
    surface,
    currentRent,
    rentComplement,
    leaseDateVal,
    elapsedMonths,
    refRent,
    ceilingRent,
    minRent,
    legalMaxMonthly,
    currentRentPerSqm,
    excessMonthly,
    excessAnnual,
    totalRefund,
    isIllegal
  };

  renderResultsDashboard(AppState.activeResult);
  updateLetterPreview(AppState.activeResult);

  if (shouldScroll) {
    const resultsWrap = document.getElementById('resultsWrapper');
    if (resultsWrap) {
      resultsWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

function renderResultsDashboard(result) {
  const placeholder = document.getElementById('resultsPlaceholder');
  const activeContent = document.getElementById('resultsActive');
  if (placeholder) placeholder.classList.add('hidden');
  if (activeContent) activeContent.classList.remove('hidden');

  const banner = document.getElementById('statusBanner');
  const badge = document.getElementById('statusBadge');
  const headline = document.getElementById('statusHeadline');
  const sub = document.getElementById('statusSub');

  const metricExcessMonthWrap = document.getElementById('metricExcessMonthWrap');
  const metricExcessMonth = document.getElementById('metricExcessMonth');
  const metricExcessYearWrap = document.getElementById('metricExcessYearWrap');
  const metricExcessYear = document.getElementById('metricExcessYear');
  const metricLegalMax = document.getElementById('metricLegalMax');
  const metricLegalPerSqm = document.getElementById('metricLegalPerSqm');
  const metricRefundTotalWrap = document.getElementById('metricRefundTotalWrap');
  const metricRefundTotal = document.getElementById('metricRefundTotal');
  const metricRefundDuration = document.getElementById('metricRefundDuration');

  const barLegendText = document.getElementById('barLegendText');
  const barSegRef = document.getElementById('barSegReference');
  const barSegCeil = document.getElementById('barSegCeiling');
  const barSegExcess = document.getElementById('barSegExcess');

  const valRefRent = document.getElementById('valRefRent');
  const valCeilingRent = document.getElementById('valCeilingRent');
  const valCurrentRent = document.getElementById('valCurrentRent');
  const resultsCtaWrap = document.getElementById('resultsCtaWrap');

  const fmt = (num) => new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num);

  if (result.isIllegal) {
    banner.className = 'results-status-banner status-banner-danger';
    badge.className = 'status-badge status-badge-danger';
    badge.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Loyer illégal - Dépassement détecté !';
    headline.className = 'status-headline status-headline-danger';
    headline.textContent = 'Dépassement de +' + fmt(result.excessMonthly) + ' € / mois';
    sub.textContent = 'Votre loyer excède le plafond légal de référence majoré fixé par arrêté préfectoral pour votre secteur.';

    metricExcessMonth.textContent = '+' + fmt(result.excessMonthly) + ' €';
    metricExcessYear.textContent = fmt(result.excessAnnual) + ' €';
    metricRefundTotal.textContent = fmt(result.totalRefund) + ' €';
    metricRefundDuration.textContent = 'Estimé sur ' + result.elapsedMonths + ' mois de bail';

    metricExcessMonthWrap.classList.remove('hidden');
    metricExcessYearWrap.classList.remove('hidden');
    metricRefundTotalWrap.classList.remove('hidden');

    if (resultsCtaWrap) resultsCtaWrap.classList.remove('hidden');
  } else {
    banner.className = 'results-status-banner status-banner-success';
    badge.className = 'status-badge status-badge-success';
    badge.innerHTML = '<i class="fa-solid fa-circle-check"></i> Conforme à la loi';
    headline.className = 'status-headline status-headline-success';
    const headroom = Math.round((result.legalMaxMonthly - result.currentRent) * 100) / 100;
    headline.textContent = 'Loyer conforme (' + fmt(headroom) + ' € sous le plafond)';
    sub.textContent = 'Votre loyer respecte le loyer de référence majoré légalement applicable à Paris.';

    metricExcessMonth.textContent = '0,00 €';
    metricExcessYear.textContent = '0,00 €';
    metricRefundTotal.textContent = '0,00 €';
    metricRefundDuration.textContent = 'Aucun trop-perçu';

    if (resultsCtaWrap) resultsCtaWrap.classList.add('hidden');
  }

  metricLegalMax.textContent = fmt(result.legalMaxMonthly) + ' €';
  metricLegalPerSqm.textContent = 'soit ' + fmt(result.ceilingRent) + ' € / m²';

  valRefRent.textContent = fmt(result.refRent) + ' € / m²';
  valCeilingRent.textContent = fmt(result.ceilingRent) + ' € / m²';
  valCurrentRent.textContent = fmt(result.currentRentPerSqm) + ' € / m²';

  barLegendText.textContent = 'Loyer actuel : ' + fmt(result.currentRentPerSqm) + ' €/m² • Plafond légal : ' + fmt(result.ceilingRent) + ' €/m²';

  const maxVal = Math.max(result.currentRentPerSqm, result.ceilingRent * 1.15);
  const refPct = Math.round((result.refRent / maxVal) * 100);
  const ceilPct = Math.round(((result.ceilingRent - result.refRent) / maxVal) * 100);
  const excessPct = result.isIllegal ? Math.round(((result.currentRentPerSqm - result.ceilingRent) / maxVal) * 100) : 0;

  barSegRef.style.width = refPct + '%';
  barSegCeil.style.width = ceilPct + '%';
  barSegExcess.style.width = excessPct + '%';
  barSegExcess.style.display = result.isIllegal ? 'flex' : 'none';

  updateInsuranceCard(result.isIllegal);
}

/* ==========================================================================
   Dynamic MRH Insurance Card Update (CRO)
   ========================================================================== */
function updateInsuranceCard(isOverpriced) {
  const badge = document.getElementById('mrh-badge');
  const subtitle = document.getElementById('mrh-subtitle');
  const desc = document.getElementById('mrh-desc');
  const btnText = document.getElementById('mrh-btn-text');
  const card = document.getElementById('mrh-card');

  if (!badge || !desc || !subtitle || !btnText) return;

  if (isOverpriced) {
    badge.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Démarche Obligatoire';
    badge.style.background = 'rgba(245, 158, 11, 0.2)';
    badge.style.color = '#fbbf24';

    subtitle.textContent = "Indispensable pour votre contestation de loyer";
    desc.textContent = "Pour toute réclamation officielle auprès du bailleur ou de la commission de conciliation, vous devez impérativement présenter une attestation d'assurance en règle. Obtenez votre attestation en 2 min.";
    btnText.textContent = "Obtenir mon attestation pour mon dossier";

    if (card) card.style.borderColor = '#f59e0b';
  } else {
    badge.innerHTML = '<i class="fa-solid fa-circle-check"></i> Bon Plan Locataire';
    badge.style.background = 'rgba(16, 185, 129, 0.2)';
    badge.style.color = '#34d399';

    subtitle.textContent = "Économisez sur vos charges obligatoires";
    desc.textContent = "Votre loyer respecte le plafond légal ! Continuez à optimiser votre budget logement avec l'assurance habitation la moins chère de Paris (dès 4€/mois sans engagement).";
    btnText.textContent = "Réduire ma facture d'assurance";

    if (card) card.style.borderColor = '#10b981';
  }
}

/* ==========================================================================
   Générateur de Mise en Demeure (Live Preview & Actions - Single Clean Setup)
   ========================================================================== */
function updateLetterPreview(res) {
  const paper = document.getElementById('letterPaper');
  if (!paper) return;

  const tenantName = document.getElementById('inputTenantName')?.value || 'Jean Dupont';
  const tenantAddress = document.getElementById('inputTenantAddress')?.value || '12 rue de la Roquette, Bât B, 3ème étage';
  const tenantPostal = document.getElementById('inputTenantPostal')?.value || '75011';
  const tenantPhone = document.getElementById('inputTenantPhone')?.value || '06 12 34 56 78';

  const landlordName = document.getElementById('inputLandlordName')?.value || 'M. Pierre Martin (Bailleur)';
  const landlordAddress = document.getElementById('inputLandlordAddress')?.value || '45 avenue de la République, 75011 Paris';

  const city = document.getElementById('inputLetterCity')?.value || 'Paris';
  const dateInput = document.getElementById('inputLetterDate')?.value;
  const formattedDate = dateInput 
    ? new Date(dateInput).toLocaleDateString('fr-FR') 
    : new Date().toLocaleDateString('fr-FR');

  const currentRent = res?.currentRent ? `${res.currentRent.toLocaleString('fr-FR')} €` : '______ €';
  const surface = res?.surface ? `${res.surface} m²` : '______ m²';
  const legalCeiling = res?.legalMaxMonthly ? `${res.legalMaxMonthly.toLocaleString('fr-FR')} €` : '______ €';
  const excessMonthly = res?.excessMonthly ? `${res.excessMonthly.toLocaleString('fr-FR')} €` : '______ €';
  const retroTotal = res?.excessMonthly 
    ? `${Math.round(res.excessMonthly * 36).toLocaleString('fr-FR')} €` 
    : '______ €';

  paper.innerHTML = `
    <div style="font-family: 'Times New Roman', Times, serif; font-size: 1.05rem; line-height: 1.6; color: #111827;">
      
      <div style="margin-bottom: 25px;">
        <strong>${tenantName}</strong><br>
        ${tenantAddress}<br>
        ${tenantPostal} Paris<br>
        Tél / Email : ${tenantPhone}
      </div>

      <div style="margin-bottom: 30px; text-align: right;">
        <strong>À l'attention de :</strong><br>
        <strong>${landlordName}</strong><br>
        ${landlordAddress}
      </div>

      <p style="margin-bottom: 20px;">Fait à <strong>${city}</strong>, le <strong>${formattedDate}</strong></p>

      <div style="margin-bottom: 25px; padding-bottom: 8px; border-bottom: 1.5px solid #111;">
        <strong>Objet : Mise en demeure – Non-respect de l'encadrement des loyers et restitution du trop-perçu</strong><br>
        <span style="font-size: 0.95rem; font-style: italic;">Lettre recommandée avec accusé de réception (LRAR)</span>
      </div>

      <p>Madame, Monsieur,</p>

      <p>
        Locataire du logement situé au <strong>${tenantAddress} (${tenantPostal} Paris)</strong>, sous contrat de bail en cours, je vous informe par la présente que le loyer appliqué à mon logement ne respecte pas les dispositions légales relatives à l'encadrement des loyers à Paris.
      </p>

      <p>
        Actuellement, mon loyer hors charges s'élève à <strong>${currentRent} / mois</strong> pour une surface habitable de <strong>${surface}</strong>.
      </p>

      <p>
        Or, en application de <strong>l'article 140 de la loi ÉLAN n° 2018-1021</strong> et de l'arrêté préfectoral fixant les loyers de référence dans la zone concernée :
      </p>

      <ul style="margin: 15px 0 15px 25px;">
        <li>Le loyer de référence majoré (plafond légal indépassable) est fixé à : <strong>${legalCeiling} / mois</strong>.</li>
        <li>Le dépassement illégal mensuel constaté s'élève à : <strong style="color: #b91c1c;">${excessMonthly} / mois</strong>.</li>
      </ul>

      <p>
        En conséquence, je vous mets formellement en demeure par la présente de :
      </p>

      <ol style="margin: 15px 0 15px 25px;">
        <li><strong>Abaisser mon loyer mensuel</strong> au montant légal de <strong>${legalCeiling}</strong> dès la prochaine échéance de loyer.</li>
        <li><strong>Me rembourser la somme totale perçue en trop</strong> au titre de la prescription triennale légale (3 ans), soit un montant estimé à <strong style="color: #b91c1c;">${retroTotal}</strong>.</li>
      </ol>

      <p>
        À défaut de réponse favorable de votre part ou d'un accord écrit dans un délai strict de <strong>30 jours</strong> à compter de la réception de la présente, je saisirai la <strong>Commission Départementale de Conciliation (CDC)</strong> de Paris, et transmettrai le dossier aux services de la Préfecture afin que soient prononcées les amendes administratives prévues par la loi (jusqu'à 5 000 € pour une personne physique et 15 000 € pour une personne morale).
      </p>

      <p style="margin-top: 25px;">
        Espérant qu'un règlement amiable et rapide de cette situation évitera l'ouverture de ces procédures, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.
      </p>

      <p style="margin-top: 35px;">
        <strong>${tenantName}</strong><br>
        <em>[Signature]</em>
      </p>

    </div>
  `;
}

// دالة مساعدة لنسخ أي نص مع دعم كامل للمتصفحات المقيدة
function copyTextUniversal(text, onSuccess) {
  if (!text || !text.trim()) return;

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => { if (onSuccess) onSuccess(); })
      .catch(() => { fallbackCopyExec(text, onSuccess); });
  } else {
    fallbackCopyExec(text, onSuccess);
  }
}

function fallbackCopyExec(text, onSuccess) {
  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '-9999px';
    textArea.style.left = '-9999px';
    textArea.setAttribute('readonly', '');
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(textArea);
    if (ok && onSuccess) onSuccess();
  } catch (err) {
    console.error('Copy error:', err);
  }
}

function initLetterGenerator() {
  const dateInput = document.getElementById('inputLetterDate');
  if (dateInput && !dateInput.value) {
    dateInput.value = new Date().toISOString().split('T')[0];
  }

  const letterInputs = [
    'inputTenantName', 'inputTenantAddress', 'inputTenantPostal', 'inputTenantPhone',
    'inputLandlordName', 'inputLandlordAddress', 'inputLetterCity', 'inputLetterDate'
  ];

  letterInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => {
        updateLetterPreview(AppState.activeResult);
      });
    }
  });

  // 1. زر النسخ الرئيسي في قسم الخطاب (btnCopyLetter)
  const btnCopy = document.getElementById('btnCopyLetter');
  if (btnCopy) {
    btnCopy.onclick = (e) => {
      e.preventDefault();
      const paper = document.getElementById('letterPaper');
      if (!paper) return;

      const textToCopy = paper.innerText || paper.textContent || '';
      copyTextUniversal(textToCopy, () => {
        const originalHTML = btnCopy.innerHTML;
        const originalBg = btnCopy.style.backgroundColor;

        btnCopy.innerHTML = '<i class="fa-solid fa-check"></i> Copié dans le presse-papier !';
        btnCopy.style.backgroundColor = '#16a34a';

        const copyToast = document.getElementById('copyToast');
        if (copyToast) copyToast.classList.remove('hidden');

        setTimeout(() => {
          btnCopy.innerHTML = originalHTML;
          btnCopy.style.backgroundColor = originalBg;
          if (copyToast) copyToast.classList.add('hidden');
        }, 2500);
      });
    };
  }

  // 2. زر الطباعة / PDF (أمر واحد مباشر يمنع تكرار النافذة عند الضغط على Cancel)
  const btnPrint = document.getElementById('btnPrintLetter');
  if (btnPrint) {
    btnPrint.onclick = (e) => {
      e.preventDefault();
      window.print();
    };
  }

  // 3. زر التحميل بصيغة .txt
  const btnDownload = document.getElementById('btnDownloadTxt');
  if (btnDownload) {
    btnDownload.onclick = (e) => {
      e.preventDefault();
      const paper = document.getElementById('letterPaper');
      if (!paper) return;

      const blob = new Blob([paper.innerText], { type: 'text/plain;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `Mise_en_demeure_loyer_${new Date().toISOString().split('T')[0]}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    };
  }

  updateLetterPreview(AppState.activeResult);
}

/* ==========================================================================
   Gestion du Modal Rapide (Banner Button)
   ========================================================================== */
function initBannerModal() {
  const btnGenerate = document.getElementById('btnGenerateLetter');
  const modal = document.getElementById('letterModal');
  const btnClose = document.getElementById('btnCloseModal');
  const btnCopyModal = document.getElementById('btnCopyModalLetter');
  const letterArea = document.getElementById('letterContent');

  if (btnGenerate && modal) {
    btnGenerate.onclick = () => {
      const res = AppState.activeResult || {};
      const rent = res.currentRent || document.getElementById('formRentCurrent')?.value || '___';
      const surface = res.surface || document.getElementById('formSurface')?.value || '___';
      const arNumber = res.arNumber || document.getElementById('formArrondissement')?.value || '___';
      const legalMax = res.legalMaxMonthly || '___';
      const excess = res.excessMonthly || '___';
      const retro = res.excessMonthly ? Math.round(res.excessMonthly * 36).toLocaleString('fr-FR') : '___';

      const letterTemplate = `[Vos Nom et Prénom]
[Votre Adresse complète à Paris ${arNumber}e]

À l'attention de : [Nom du Propriétaire ou de l'Agence]
[Adresse du destinataire]

Fait à Paris, le ${new Date().toLocaleDateString('fr-FR')}

Objet : Mise en demeure - Diminution du loyer et restitution du trop-perçu (Loi ÉLAN)
Lettre recommandée avec avis de réception (LRAR)

Madame, Monsieur,

Locataire du logement situé au [Votre adresse complète], je constate que le loyer appliqué (hors charges) s'élève à ${rent} € / mois pour une surface de ${surface} m².

Conformément à l'Arrêté Préfectoral fixant les loyers de référence à Paris (article 140 de la loi ÉLAN n° 2018-1021) :
- Le loyer de référence majoré (plafond légal) applicable est de : ${legalMax} € / mois.
- Le loyer appliqué présente ainsi un dépassement non justifié de : ${excess} € / mois.

Par la présente, je vous mets en demeure de :
1. Réduire immédiatement mon loyer mensuel au montant légal de ${legalMax} € / mois dès la prochaine échéance.
2. Procéder au remboursement de la somme totale perçue en trop, estimée à ${retro} € (au titre de la prescription triennale de 3 ans).

À défaut de régularisation ou d'accord écrit sous 30 jours, je porterai le litige devant la Commission Départementale de Conciliation (CDC) de Paris ainsi que les services préfectoraux.

Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

[Signature]`;

      if (letterArea) letterArea.value = letterTemplate;
      modal.style.display = 'block';
    };

    if (btnClose) {
      btnClose.onclick = () => { modal.style.display = 'none'; };
    }

    window.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });

    if (btnCopyModal && letterArea) {
      btnCopyModal.onclick = () => {
        copyTextUniversal(letterArea.value, () => {
          btnCopyModal.innerHTML = '<i class="fa-solid fa-check"></i> Copié !';
          btnCopyModal.style.background = '#16a34a';
          btnCopyModal.style.color = '#ffffff';
          setTimeout(() => {
            btnCopyModal.innerHTML = '<i class="fa-regular fa-copy"></i> Copier le texte';
            btnCopyModal.style.background = '#e5e7eb';
            btnCopyModal.style.color = '#374151';
          }, 2000);
        });
      };
    }
  }
}

/* ==========================================================================
   Modals (Mentions Légales, RGPD, Contact)
   ========================================================================== */
function initModals() {
  document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modalId = trigger.getAttribute('data-modal');
      const dialog = document.getElementById(modalId);
      if (dialog && typeof dialog.showModal === 'function') {
        dialog.showModal();
      }
    });
  });

  document.querySelectorAll('[data-close-modal]').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      const dialog = closeBtn.closest('dialog');
      if (dialog) dialog.close();
    });
  });

  document.querySelectorAll('.app-modal').forEach(dialog => {
    dialog.addEventListener('click', (e) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        dialog.close();
      }
    });
  });
}

// ==========================================
// 1. محلل نصوص الإعلانات بالـ Regex
// ==========================================
function parseAdText(text) {
  if (!text || text.length < 10) return null;

  // 1. استخراج الإيجار (أرقام تسبق أو تلي كلمة € أو euros أو loyer)
  const priceMatch = text.match(/(?:loyer\s*[:de\s]*)?(\d{3,4})\s*(?:€|euros)/i) || 
                     text.match(/(\d{3,4})\s*€/);
  const price = priceMatch ? parseInt(priceMatch[1], 10) : null;

  // 2. استخراج المساحة (أرقام تليها m² أو m2 أو metre carre)
  const surfaceMatch = text.match(/(\d{1,3}(?:[.,]\d)?)\s*(?:m²|m2|mètres?\s*carrés?)/i);
  const surface = surfaceMatch ? parseFloat(surfaceMatch[1].replace(',', '.')) : null;

  // 3. استخراج الدائرة (750xx أو Paris xx أو 11e / 18ème)
  let arrond = null;
  const zipMatch = text.match(/750(0[1-9]|1[0-9]|20)/);
  if (zipMatch) {
    arrond = parseInt(zipMatch[1], 10);
  } else {
    const arrondMatch = text.match(/(?:paris\s*)?([1-9]|1[0-9]|20)(?:e|ème|er)?\s*(?:arrondissement|arrdt)?/i);
    if (arrondMatch) {
      arrond = parseInt(arrondMatch[1], 10);
    }
  }

  // 4. استخراج نوع الإيجار (Meublé / Vide)
  const isMeuble = /meubl[ée]/i.test(text);

  return { price, surface, arrond, isMeuble };
}

// تشغيل الفحص عند الضغط على الزر
document.getElementById('btnScanAd')?.addEventListener('click', () => {
  const rawText = document.getElementById('rawAdText').value;
  const parsed = parseAdText(rawText);

  if (!parsed || !parsed.price || !parsed.surface) {
    alert("Impossible d'extraire toutes les données. Assurez-vous d'inclure le loyer (€) et la surface (m²).");
    return;
  }

  // ملء بيانات الحاسبة الأصلية تلقائياً
  if (parsed.arrond) document.getElementById('arrondissement').value = parsed.arrond;
  document.getElementById('surface').value = parsed.surface;
  document.getElementById('currentRent').value = parsed.price;
  document.getElementById('meuble').value = parsed.isMeuble ? 'meuble' : 'non_meuble';

  // تقدير سريع (سقف متوسط لباريس تقريبي: 33€/m² للتحليل السريع)
  const estimatedCap = Math.round(parsed.surface * (parsed.isMeuble ? 35 : 31));
  const diff = parsed.price - estimatedCap;

  // عرض النتيجة السريعة
  const resultCard = document.getElementById('quickScanResult');
  resultCard.classList.remove('hidden');

  document.getElementById('scanArrond').textContent = parsed.arrond ? `Paris ${parsed.arrond}e` : 'Non précisé';
  document.getElementById('scanSurface').textContent = parsed.surface;
  document.getElementById('scanPrice').textContent = parsed.price;
  document.getElementById('scanLegal').textContent = estimatedCap;

  const statusBadge = document.getElementById('scanStatusBadge');
  const savingBadge = document.getElementById('scanEstimatedSaving');

  if (diff > 20) {
    statusBadge.textContent = "Loyer Suspect / Dépassement probable";
    statusBadge.className = "status-badge badge-danger";
    savingBadge.textContent = `Économie potentielle : +${diff} € / mois`;
    savingBadge.className = "saving-badge text-green";
  } else {
    statusBadge.textContent = "Loyer conforme au plafond";
    statusBadge.className = "status-badge badge-success";
    savingBadge.textContent = "Prix légal";
    savingBadge.className = "saving-badge text-gray";
  }

  // تخزين العنصر الحالي لزر الحفظ
  window.lastScannedAd = {
    id: Date.now(),
    arrond: parsed.arrond ? `Paris ${parsed.arrond}e` : 'Paris',
    surface: parsed.surface,
    price: parsed.price,
    legalCap: estimatedCap,
    diff: Math.max(0, diff)
  };
});

// ==========================================
// 2. إدارة المقارنة عبر LocalStorage
// ==========================================
function getSavedAds() {
  return JSON.parse(localStorage.getItem('loyer_saved_ads') || '[]');
}

function renderSavedTable() {
  const ads = getSavedAds();
  const tbody = document.getElementById('savedTableBody');
  const countSpan = document.getElementById('savedCount');
  if (!tbody) return;

  tbody.innerHTML = '';
  countSpan.textContent = ads.length;

  if (ads.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; color:#888;">Aucune annonce enregistrée pour le moment.</td></tr>';
    return;
  }

  ads.forEach(ad => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${ad.arrond}</strong></td>
      <td>${ad.surface} m²</td>
      <td>${ad.price} €</td>
      <td><span class="${ad.diff > 0 ? 'badge-danger' : 'badge-success'}">${ad.diff > 0 ? 'Surévalué' : 'Conforme'}</span></td>
      <td><strong style="color: ${ad.diff > 0 ? '#10b981' : '#6b7280'}">${ad.diff > 0 ? '+' + ad.diff + ' €/mois' : '0 €'}</strong></td>
      <td><button class="btn-del" onclick="deleteSavedAd(${ad.id})"><i class="fa-solid fa-trash"></i></button></td>
    `;
    tbody.appendChild(tr);
  });
}

document.getElementById('btnSaveToList')?.addEventListener('click', () => {
  if (!window.lastScannedAd) return;
  const ads = getSavedAds();
  ads.unshift(window.lastScannedAd);
  localStorage.setItem('loyer_saved_ads', JSON.stringify(ads));
  renderSavedTable();
  alert("Annonce ajoutée à votre tableau de comparaison !");
});

window.deleteSavedAd = function(id) {
  let ads = getSavedAds();
  ads = ads.filter(a => a.id !== id);
  localStorage.setItem('loyer_saved_ads', JSON.stringify(ads));
  renderSavedTable();
};

document.getElementById('btnClearSaved')?.addEventListener('click', () => {
  if (confirm("Supprimer toute votre liste d'annonces ?")) {
    localStorage.removeItem('loyer_saved_ads');
    renderSavedTable();
  }
});

// تهيئة الجدول عند فتح الموقع
document.addEventListener('DOMContentLoaded', renderSavedTable);
// ==========================================
// إدارة وضع المظهر (Light / Dark / System)
// ==========================================
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeDropdown = document.getElementById('themeDropdown');
const themeOptions = document.querySelectorAll('.theme-option');
const themeIcon = document.getElementById('themeIcon');
const systemMedia = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme(theme) {
  let isDark = false;

  if (theme === 'system') {
    isDark = systemMedia.matches;
    themeIcon.className = 'fa-solid fa-circle-half-stroke';
  } else if (theme === 'dark') {
    isDark = true;
    themeIcon.className = 'fa-solid fa-moon';
  } else {
    isDark = false;
    themeIcon.className = 'fa-solid fa-sun';
  }

  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  localStorage.setItem('theme_preference', theme);

  // تحديث الزر النشط في القائمة
  themeOptions.forEach(opt => {
    opt.classList.toggle('active', opt.dataset.themeValue === theme);
  });
}

// فتح / إغلاق القائمة المنسدلة
themeToggleBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  themeDropdown.classList.toggle('hidden');
});

// إغلاق القائمة عند النقر في أي مكان خارجها
document.addEventListener('click', () => {
  themeDropdown?.classList.add('hidden');
});

// التعامل مع خيارات المستخدم
themeOptions.forEach(option => {
  option.addEventListener('click', () => {
    applyTheme(option.dataset.themeValue);
    themeDropdown.classList.add('hidden');
  });
});

// الاستماع لتغييرات نظام التشغيل في حال اختيار "System"
systemMedia.addEventListener('change', () => {
  if ((localStorage.getItem('theme_preference') || 'system') === 'system') {
    applyTheme('system');
  }
});

// تهيئة الوضع الأولي عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  const currentTheme = localStorage.getItem('theme_preference') || 'system';
  applyTheme(currentTheme);
});

