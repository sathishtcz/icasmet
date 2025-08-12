import React from 'react'
import { Helmet } from 'react-helmet'

export default function Helmetcomponent({ title, canonical }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="keywords" content="International Conference, Applied Science Conference, Engineering Conference, Multidisciplinary Engineering, Technology Conference, ICASMET 2025, Research Conference, Renewable Energy, AI Conference, Materials Science, Biomedical Engineering, Digital Innovation, Applied Mathematics" />
            <meta name="description" content="Join the International Conference on Applied Science, Multidisciplinary Engineering & Technology (ICASMET 2025) to explore cutting-edge research in engineering, science, and technology. Network with global experts, present your work, and discover innovations shaping the future." />
            <meta name="author" content="ICASMET Editorial Team" />
            <meta name="robots" content="index, follow" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Conference on Applied Science, Multidisciplinary Engineering & Technology" />
            <meta property="og:description" content="Join the International Conference on Applied Science, Multidisciplinary Engineering & Technology (ICASMET 2025) to explore cutting-edge research in engineering, science, and technology. Network with global experts, present your work, and discover innovations shaping the future." />
            <meta property="og:url" content="https://icasmet.com/" />
            <meta property="og:image" content="https://icasmet.com/assets/images/logo.png" />
            <link rel="canonical" href={canonical} />
            <link rel="icon" type="image/png" href="https://icasmet.com/assets/images/Fav.png" />

        </Helmet>
    )
}

