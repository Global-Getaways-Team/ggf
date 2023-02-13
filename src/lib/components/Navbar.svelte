<script lang="ts">
	// Packages
    import Icon from '@iconify/svelte';

    // Components
    import Logo from '$lib/components/Logo.svelte';

	// Icons
    import cityIcon from '@iconify/icons-healthicons/city';
    import contactPageOutlineRounded from '@iconify/icons-material-symbols/contact-page-outline-rounded';
    import globeLight from '@iconify/icons-ph/globe-light';
    import outlineLandscape from '@iconify/icons-ic/outline-landscape';
    import welcomeWriteBlog from '@iconify/icons-dashicons/welcome-write-blog';

    // Variables
    type Continent = {
		name: string;
		href: string;
	};

	const continents: Continent[] = [
		{
			name: 'Afrika',
			href: '/continent/africa',
		},
		{
			name: 'Asien',
			href: '/continent/asia',
		},
		{
			name: 'Australien-Ozeanien',
			href: '/continent/australia-oceania',
		},
		{
			name: 'Europa',
			href: '/continent/europe',
		},
		{
			name: 'Nordamerika',
			href: '/continent/north-america',
		},
		{
			name: 'Südamerika',
			href: '/continent/south-america',
		},
	];

    type Country = {
        name: string;
        href: string;
    }

    const countries: Country[] = [
		{
			name: 'Marokko',
			href: '/continent/africa/country/morocco',
		},
		{
			name: 'Seychellen',
			href: '/continent/africa/country/seychelles',
		},
		{
			name: 'Südafrika',
			href: '/continent/africa/country/south-africa',
		},
		{
			name: 'Japan',
			href: '/continent/asia/country/japan',
		},
		{
			name: 'Korea',
			href: '/continent/asia/country/korea',
		},
		{
			name: 'Malediven',
			href: '/continent/asia/country/maldives',
		},
		{
			name: 'Australien',
			href: '/continent/australia-oceania/country/australia',
		},
		{
			name: 'Neuseeland',
			href: '/continent/australia-oceania/country/new-zealand',
		},
		{
			name: 'Dänemark',
			href: '/continent/europe/country/denmark',
		},
		{
			name: 'Deutschland',
			href: '/continent/europe/country/germany',
		},
		{
			name: 'Kroatien',
			href: '/continent/europe/country/croatia',
		},
		{
			name: 'Kanada',
			href: '/continent/north-america/country/canada',
		},
		{
			name: 'Mexiko',
			href: '/continent/north-america/country/mexico',
		},
		{
			name: 'Vereinigte Staaten von Amerika',
			href: '/continent/north-america/country/usa',
		},
		{
			name: 'Argentinien',
			href: '/continent/south-america/country/argentina',
		},
		{
			name: 'Brasilien',
			href: '/continent/south-america/country/brazil',
		},
		{
			name: 'Peru',
			href: '/continent/south-america/country/peru',
		},
	];
    
    type City = {
        name: string;
        href: string;
    }

    const cities: City[] = [
		{
			name: 'Casablanca',
			href: '/continent/africa/country/morocco/city/casablanca',
		},
		{
			name: 'Marrakesch',
			href: '/continent/africa/country/morocco/city/marrakesh',
		},
		{
			name: 'La Digue',
			href: '/continent/africa/country/seychelles/city/la-digue',
		},
		{
			name: 'Victoria',
			href: '/continent/africa/country/seychelles/city/victoria',
		},
		{
			name: 'Bergville',
			href: '/continent/africa/country/south-africa/city/bergville',
		},
		{
			name: 'Kapstadt',
			href: '/continent/africa/country/south-africa/city/cape-town',
		},
		{
			name: 'Osaka',
			href: '/continent/asia/country/japan/city/osaka',
		},
		{
			name: 'Tokio',
			href: '/continent/asia/country/japan/city/tokio',
		},
		{
			name: 'Busan',
			href: '/continent/asia/country/korea/city/busan',
		},
		{
			name: 'Seoul',
			href: '/continent/asia/country/korea/city/seoul',
		},
		{
			name: 'Fulhadoo',
			href: '/continent/asia/country/maldives/city/fulhadoo',
		},
		{
			name: 'Malé',
			href: '/continent/asia/country/maldives/city/male',
		},
		{
			name: 'Melbourne',
			href: '/continent/australia-oceania/country/australia/city/melbourne',
		},
		{
			name: 'Sydney',
			href: '/continent/australia-oceania/country/australia/city/sydney',
		},
		{
			name: 'Auckland',
			href: '/continent/australia-oceania/country/new-zealand/city/auckland',
		},
		{
			name: 'Wellington',
			href: '/continent/australia-oceania/country/new-zealand/city/wellington',
		},
		{
			name: 'Aarhus',
			href: '/continent/europe/country/denmark/city/aarhus',
		},
		{
			name: 'Kopenhagen',
			href: '/continent/europe/country/denmark/city/copenhagen',
		},
		{
			name: 'Berlin',
			href: '/continent/europe/country/germany/city/berlin',
		},
		{
			name: 'München',
			href: '/continent/europe/country/germany/city/munich',
		},
		{
			name: 'Dubrovnik',
			href: '/continent/europe/country/croatia/city/dubrovnik',
		},
		{
			name: 'Split',
			href: '/continent/europe/country/croatia/city/split',
		},
		{
			name: 'Québec',
			href: '/continent/north-america/country/canada/city/quebec',
		},
		{
			name: 'Vancouver',
			href: '/continent/north-america/country/canada/city/vancouver',
		},
		{
			name: 'Bacalar',
			href: '/continent/north-america/country/mexico/city/bacalar',
		},
		{
			name: 'San Miguel de Allende',
			href: '/continent/north-america/country/mexico/city/san-miguel-de-allende',
		},
		{
			name: 'New York City',
			href: '/continent/north-america/country/usa/city/new-york-city',
		},
		{
			name: 'San Francisco',
			href: '/continent/north-america/country/usa/city/san-francisco',
		},
		{
			name: 'Bariloche',
			href: '/continent/south-america/country/argentina/city/bariloche',
		},
		{
			name: 'Buenos Aires',
			href: '/continent/south-america/country/argentina/city/buenos-aires',
		},
		{
			name: 'Rio de Janeiro',
			href: '/continent/south-america/country/brazil/city/rio-de-janeiro',
		},
		{
			name: 'São Paulo',
			href: '/continent/south-america/country/brazil/city/sao-paulo',
		},
		{
			name: 'Cusco',
			href: '/continent/south-america/country/peru/city/cusco',
		},
		{
			name: 'Lima',
			href: '/continent/south-america/country/peru/city/lima',
		},
	];
</script>

<nav class="navbar">
    <a href="/" class="logo">
        <Logo />
    </a>
    <ul class="flex menu">
        <li>
            <a href="/blog">
                <Icon class="inline-block" icon={welcomeWriteBlog} />
                Blogbeiträge
            </a>
            <ul class="submenu">
                <li>
                    <a href="/continent">
                        <Icon class="inline-block" icon={globeLight} />
                        Kontinente
                    </a>
                </li>
                <li>
                    <a href="/continent/africa">
                        Afrika
                    </a>
                    <ul class="submenu2">
                        <li>
                            <a href="/continent/africa/country">
                                <Icon class="inline-block" icon={outlineLandscape} />
                                Länder
                            </a>
                        </li>
                        <li>
                            <a href="/continent/africa/country/morocco">
                                Marokko
                            </a>
                            <ul class="submenu3">
                                <li>
                                    <a href="/city">
                                        <Icon class="inline-block" icon={cityIcon} />
                                        Städte
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/africa/country/morocco/city/casablanca">
                                        Casablanca
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/africa/country/morocco/city/marrakesh">
                                        Marrakesch
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/continent/africa/country/seychelles">
                                Seychellen
                            </a>
                            <ul class="submenu3">
                                <li>
                                    <a href="/city">
                                        <Icon class="inline-block" icon={cityIcon} />
                                        Städte
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/africa/country/seychelles/city/la-digue">
                                        La Digue
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/africa/country/seychelles/city/victoria">
                                        Victoria
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/continent/africa/country/south-africa">
                                Südafrika
                            </a>
                            <ul class="submenu3">
                                <li>
                                    <a href="/city">
                                        <Icon class="inline-block" icon={cityIcon} />
                                        Städte
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/africa/country/south-africa/city/bergville">
                                        Bergville
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/africa/country/south-africa/city/cape-town">
                                        Kapstadt
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/continent/asia">
                        Asien
                    </a>
                    <ul class="submenu2">
                        <li>
                            <a href="/continent/asia/country">
                                <Icon class="inline-block" icon={outlineLandscape} />
                                Länder
                            </a>
                        </li>
                        <li>
                            <a href="/continent/asia/country/japan">
                                Japan
                            </a>
                            <ul class="submenu3">
                                <li>
                                    <a href="/city">
                                        <Icon class="inline-block" icon={cityIcon} />
                                        Städte
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/asia/country/japan/city/osaka">
                                        Osaka
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/asia/country/japan/city/tokio">
                                        Tokio
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/continent/asia/country/korea">
                                Korea
                            </a>
                            <ul class="submenu3">
                                <li>
                                    <a href="/city">
                                        <Icon class="inline-block" icon={cityIcon} />
                                        Städte
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/asia/country/korea/city/busan">
                                        Busan
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/asia/country/korea/city/seoul">
                                        Seoul
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/continent/asia/country/maldives">
                                Malediven
                            </a>
                            <ul class="submenu3">
                                <li>
                                    <a href="/city">
                                        <Icon class="inline-block" icon={cityIcon} />
                                        Städte
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/asia/country/maldives/city/fulhadoo">
                                        Fulhadoo
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/asia/country/maldives/city/male">
                                        Malé
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/continent/australia-oceania">
                        Australien-Ozeanien
                    </a>
                    <ul class="submenu2">
                        <li>
                            <a href="/continent/australia-oceania/country">
                                <Icon class="inline-block" icon={outlineLandscape} />
                                Länder
                            </a>
                        </li>
                        <li>
                            <a href="/continent/australia-oceania/country/australia">
                                Australien
                            </a>
                            <ul class="submenu3">
                                <li>
                                    <a href="/city">
                                        <Icon class="inline-block" icon={cityIcon} />
                                        Städte
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/australia-oceania/country/australia/city/melbourne">
                                        Melbourne
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/australia-oceania/country/australia/city/sydney">
                                        Sydney
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/continent/australia-oceania/country/new-zealand">
                                Neuseeland
                            </a>
                            <ul class="submenu3">
                                <li>
                                    <a href="/city">
                                        <Icon class="inline-block" icon={cityIcon} />
                                        Städte
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/australia-oceania/country/new-zealand/city/auckland">
                                        Auckland
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/australia-oceania/country/new-zealand/city/wellington">
                                        Wellington
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/continent/europe">
                        Europa
                    </a>
                    <ul class="submenu2">
                        <li>
                            <a href="/continent/europe/country">
                                <Icon class="inline-block" icon={outlineLandscape} />
                                Länder
                            </a>
                        </li>
                        <li>
                            <a href="/continent/europe/country/denmark">
                                Dänemark
                            </a>
                            <ul class="submenu3">
                                <li>
                                    <a href="/city">
                                        <Icon class="inline-block" icon={cityIcon} />
                                        Städte
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/europe/country/denmark/city/copenhagen">
                                        Aarhus
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/europe/country/denmark/city/munich">
                                        Kopenhagen
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/continent/europe/country/germany">
                                Deutschland
                            </a>
                            <ul class="submenu3">
                                <li>
                                    <a href="/city">
                                        <Icon class="inline-block" icon={cityIcon} />
                                        Städte
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/europe/country/germany/city/berlin">
                                        Berlin
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/europe/country/germany/city/munich">
                                        München
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/continent/europe/country/croatia">
                                Kroatien
                            </a>
                            <ul class="submenu3">
                                <li>
                                    <a href="/city">
                                        <Icon class="inline-block" icon={cityIcon} />
                                        Städte
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/europe/country/croatia/city/dubrovnik">
                                        Dubrovnik
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/europe/country/croatia/city/split">
                                        Split
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/continent/north-america">
                        Nordamerika
                    </a>
                    <ul class="submenu2">
                        <li>
                            <a href="/continent/north-america/country">
                                <Icon class="inline-block" icon={outlineLandscape} />
                                Länder
                            </a>
                        </li>
                        <li>
                            <a href="/continent/north-america/country/canada">
                                Kanada
                            </a>
                            <ul class="submenu3">
                                <li>
                                    <a href="/city">
                                        <Icon class="inline-block" icon={cityIcon} />
                                        Städte
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/north-america/country/canada/city/quebec">
                                        Québec
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/north-america/country/canada/city/vancouver">
                                        Vancouver
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/continent/north-america/country/mexico">
                                Mexiko
                            </a>
                            <ul class="submenu3">
                                <li>
                                    <a href="/city">
                                        <Icon class="inline-block" icon={cityIcon} />
                                        Städte
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/north-america/country/mexico/city/bacalar">
                                        Bacalar
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/north-america/country/mexico/city/san-miguel-de-allende">
                                        San Miguel de Allende
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/continent/north-america/country/usa">
                                Vereinigte Staaten von Amerika
                            </a>
                            <ul class="submenu3">
                                <li>
                                    <a href="/city">
                                        <Icon class="inline-block" icon={cityIcon} />
                                        Städte
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/north-america/country/usa/city/new-york-city">
                                        New York City
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/north-america/country/usa/city/san-francisco">
                                        San Francisco
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/continent/south-america">
                        Südamerika
                    </a>
                    <ul class="submenu2">
                        <li>
                            <a href="/continent/south-america/country">
                                <Icon class="inline-block" icon={outlineLandscape} />
                                Länder
                            </a>
                        </li>
                        <li>
                            <a href="/continent/south-america/country/argentina">
                                Argentinien
                            </a>
                            <ul class="submenu3">
                                <li>
                                    <a href="/city">
                                        <Icon class="inline-block" icon={cityIcon} />
                                        Städte
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/south-america/country/argentina/city/bariloche">
                                        Bariloche
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/south-america/country/argentina/city/buenos-aires">
                                        Buenos Aires
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/continent/south-america/country/brazil">
                                Brasilien
                            </a>
                            <ul class="submenu3">
                                <li>
                                    <a href="/city">
                                        <Icon class="inline-block" icon={cityIcon} />
                                        Städte
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/south-america/country/brazil/city/rio-de-janeiro">
                                        Rio de Janeiro
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/south-america/country/brazil/city/sao-paulo">
                                        São Paulo
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/continent/south-america/country/peru">
                                Peru
                            </a>
                            <ul class="submenu3">
                                <li>
                                    <a href="/city">
                                        <Icon class="inline-block" icon={cityIcon} />
                                        Städte
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/south-america/country/peru/city/cusco">
                                        Cusco
                                    </a>
                                </li>
                                <li>
                                    <a href="/continent/south-america/country/peru/city/lima">
                                        Lima
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <a href="/about">
                <Icon class="inline-block" icon={contactPageOutlineRounded} />
                Über uns
            </a>
        </li>
    </ul>
</nav>

<style>
    .navbar {
        margin: 0 auto;
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

	.menu > li, 
    .menu > li > a {
        display: inline-block;
    }

    .menu a {
        width: 175px;
        padding: 10px 1.5rem;
        display: block;
        color: #ffffff;
        text-decoration: none;
        transition: background-color .22s ease, color .22s ease;
    }

    .menu a:hover {
        color: #ffffff;
        background-color: #f26e27;
    }

    .menu li {
        position: relative;
    }

    .menu li:hover > .submenu {
        display: block;
    }

    .submenu {
        display: none;
        width: 175px;
        position: absolute;
        left: 0;
        background-color: #0d50a4;
    }

    .submenu li:hover > .submenu2 {
        display: block;
    }

    .submenu2 {
        display: none;
        width: 175px;
        position: absolute;
        right: 100%;
        top: 0;
        background-color: #1164cf;
    }

    .submenu2 li:hover > .submenu3 {
        display: block;
    }

    .submenu3 {
        display: none;
        width: 175px;
        position: absolute;
        right: 100%;
        top: 0;
        background-color: #1479f9;
    }
</style>