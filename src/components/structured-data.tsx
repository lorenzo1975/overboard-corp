export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Overboard Co., Ltd.",
    "alternateName": "Overboard Asia",
    "url": "https://overboard-corp.netlify.app",
    "logo": "https://overboard-corp.netlify.app/images/logos/logo.png",
    "description": "Thailand's premier multi-brand beachwear retailer with six profitable stores across key destinations.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TH",
      "addressRegion": "Thailand"
    },
    "sameAs": [
      "https://www.linkedin.com/in/lorenzobeltrame/",
      "https://www.facebook.com/OverboardThailand/",
      "https://www.instagram.com/overboardthailand/",
      "https://overboard.asia"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+66-848-44-5742",
      "contactType": "Customer Service",
      "email": "info@overboard.co.th",
      "availableLanguage": ["English", "Thai"]
    }
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Overboard Asia",
    "description": "Premier water sports and beachwear retail chain with six thriving locations across Thailand's top beach destinations.",
    "numberOfLocations": 6,
    "foundingDate": "2015",
    "url": "https://overboard-corp.netlify.app",
    "areaServed": {
      "@type": "Country",
      "name": "Thailand"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://overboard-corp.netlify.app"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
