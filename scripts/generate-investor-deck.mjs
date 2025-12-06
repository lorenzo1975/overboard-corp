import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Brand colors (matching Tailwind config)
const colors = {
  primary: '#0369a1', // sky-700
  accent: '#0891b2', // cyan-600
  dark: '#0f172a', // slate-950
  light: '#f1f5f9', // slate-100
  white: '#ffffff',
  gray: '#64748b' // slate-500
};

function createDeck() {
  const doc = new PDFDocument({
    size: 'A4',
    layout: 'landscape',
    margins: {
      top: 50,
      bottom: 50,
      left: 60,
      right: 60
    }
  });

  const outputPath = path.join(__dirname, '../public/investor-deck.pdf');
  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  // Helper functions
  function addSlideNumber(num, total) {
    doc.fontSize(10)
      .fillColor(colors.gray)
      .text(`${num} / ${total}`, 60, doc.page.height - 70, {
        align: 'left',
        width: doc.page.width - 120
      });
  }

  function addTeaserNote() {
    doc.fontSize(8)
      .fillColor(colors.gray)
      .text('PRELIMINARY TEASER - Contact us for detailed financials and investment terms', 60, doc.page.height - 60, {
        align: 'center',
        width: doc.page.width - 120
      });
  }

  function newSlide() {
    doc.addPage();
  }

  function addHeader(text, subtitle = null) {
    doc.fontSize(32)
      .fillColor(colors.dark)
      .font('Helvetica-Bold')
      .text(text, 60, 80, { width: doc.page.width - 120 });

    if (subtitle) {
      doc.fontSize(16)
        .fillColor(colors.gray)
        .font('Helvetica')
        .text(subtitle, 60, 130, { width: doc.page.width - 120 });
    }
  }

  function addBullet(text, y) {
    const bulletX = 80;
    const textX = 100;

    doc.fontSize(12)
      .fillColor(colors.accent)
      .circle(bulletX, y + 6, 3)
      .fill();

    doc.fontSize(14)
      .fillColor(colors.dark)
      .font('Helvetica')
      .text(text, textX, y, { width: doc.page.width - textX - 60 });
  }

  const totalSlides = 8;

  // ==================
  // SLIDE 1: COVER
  // ==================
  doc.rect(0, 0, doc.page.width, doc.page.height)
    .fill(colors.dark);

  doc.fontSize(48)
    .fillColor(colors.white)
    .font('Helvetica-Bold')
    .text('OVERBOARD ASIA', 60, 180, {
      width: doc.page.width - 120,
      align: 'center'
    });

  doc.fontSize(24)
    .fillColor(colors.accent)
    .font('Helvetica')
    .text('Investment Opportunity', 60, 250, {
      width: doc.page.width - 120,
      align: 'center'
    });

  doc.fontSize(16)
    .fillColor(colors.light)
    .text("Thailand's Premier Multi-Brand Water Sports Retailer", 60, 300, {
      width: doc.page.width - 120,
      align: 'center'
    });

  doc.fontSize(12)
    .fillColor(colors.gray)
    .text('PRELIMINARY TEASER DECK', 60, 380, {
      width: doc.page.width - 120,
      align: 'center'
    });

  doc.fontSize(10)
    .fillColor(colors.gray)
    .text('Contact us for detailed financials and full investment memorandum', 60, 410, {
      width: doc.page.width - 120,
      align: 'center'
    });

  // ==================
  // SLIDE 2: EXECUTIVE SUMMARY
  // ==================
  newSlide();
  addHeader('Executive Summary', 'A proven retail model ready for strategic expansion');

  let yPos = 180;
  doc.fontSize(14)
    .fillColor(colors.dark)
    .font('Helvetica')
    .text('Overboard Asia is a leading multi-brand water sports and lifestyle retailer operating six profitable locations across Thailand\'s premier coastal destinations.', 60, yPos, {
      width: doc.page.width - 120,
      lineGap: 8
    });

  yPos += 80;
  addBullet('6 thriving stores in high-traffic tourist destinations', yPos);
  yPos += 35;
  addBullet('Curated selection of international premium brands', yPos);
  yPos += 35;
  addBullet('Proven business model pivoted and strengthened during COVID-19', yPos);
  yPos += 35;
  addBullet('Strong community presence and customer loyalty', yPos);
  yPos += 35;
  addBullet('Positioned for regional expansion across Southeast Asia', yPos);

  addSlideNumber(2, totalSlides);
  addTeaserNote();

  // ==================
  // SLIDE 3: THE MARKET OPPORTUNITY
  // ==================
  newSlide();
  addHeader('The Market Opportunity', 'Tapping into surging demand for adventure & leisure');

  yPos = 180;
  doc.fontSize(14)
    .fillColor(colors.dark)
    .font('Helvetica-Bold')
    .text('Southeast Asia Tourism Boom', 60, yPos);

  yPos += 30;
  doc.fontSize(12)
    .font('Helvetica')
    .text('Southeast Asia\'s tourism and leisure sectors are experiencing unprecedented growth. Modern consumers, especially millennials and Gen Z, prioritize unique experiences over material goods.', 60, yPos, {
      width: doc.page.width - 120,
      lineGap: 6
    });

  yPos += 80;
  doc.fontSize(14)
    .font('Helvetica-Bold')
    .fillColor(colors.dark)
    .text('Perfect Market Position', 60, yPos);

  yPos += 30;
  doc.fontSize(12)
    .font('Helvetica')
    .text('Overboard Asia sits at the intersection of retail, rentals, and community, offering an integrated lifestyle solution that captures this powerful market trend. Our model is not just about selling products; it\'s about building a loyal community around the passion for water sports.', 60, yPos, {
      width: doc.page.width - 120,
      lineGap: 6
    });

  addSlideNumber(3, totalSlides);
  addTeaserNote();

  // ==================
  // SLIDE 4: CURRENT OPERATIONS
  // ==================
  newSlide();
  addHeader('Current Operations', 'Six thriving locations across Thailand\'s top destinations');

  yPos = 180;
  const stores = [
    { name: 'Overboard Bangtao - Laguna Beach', location: 'Phuket', fact: 'Top Performing Location' },
    { name: 'Overboard Karon', location: 'Phuket', fact: 'Highest Rental Revenue' },
    { name: 'Overboard Nai Harn', location: 'Phuket', fact: 'Newest Flagship' },
    { name: 'Overboard Hua Hin', location: 'Hua Hin', fact: 'Community Hub' },
    { name: 'O\'Neill Rawai', location: 'Phuket', fact: 'Best Customer Ratings' },
    { name: 'Overboard Krabi', location: 'Krabi', fact: 'Urban Concept Store' }
  ];

  const col1X = 80;
  const col2X = doc.page.width / 2 + 40;
  let col1Y = yPos;
  let col2Y = yPos;

  stores.forEach((store, index) => {
    const isLeftColumn = index % 2 === 0;
    const x = isLeftColumn ? col1X : col2X;
    const y = isLeftColumn ? col1Y : col2Y;

    doc.fontSize(12)
      .fillColor(colors.accent)
      .font('Helvetica-Bold')
      .text(`${index + 1}. ${store.name}`, x, y, { width: 300 });

    doc.fontSize(10)
      .fillColor(colors.gray)
      .font('Helvetica')
      .text(`${store.location} · ${store.fact}`, x, y + 18, { width: 300 });

    if (isLeftColumn) {
      col1Y += 55;
    } else {
      col2Y += 55;
    }
  });

  addSlideNumber(4, totalSlides);
  addTeaserNote();

  // ==================
  // SLIDE 5: GROWTH STRATEGY
  // ==================
  newSlide();
  addHeader('Growth Strategy', 'Clear vision for scalable expansion');

  yPos = 180;
  const strategies = [
    {
      phase: 'Phase 1: Domestic Dominance',
      desc: 'Solidify market leadership by opening new flagship stores in Thailand\'s key coastal and urban tourist hotspots.'
    },
    {
      phase: 'Phase 2: Regional Expansion',
      desc: 'Strategically enter high-growth markets such as Indonesia, Vietnam, and the Philippines, replicating our successful model.'
    },
    {
      phase: 'Phase 3: Franchise Model',
      desc: 'Develop and launch a comprehensive franchise program to accelerate growth and brand presence across the APAC region.'
    },
    {
      phase: 'Phase 4: Strong ROI',
      desc: 'Our lean operational model and diversified revenue streams are designed to deliver strong, sustainable returns for investors.'
    }
  ];

  strategies.forEach((strategy) => {
    doc.fontSize(14)
      .fillColor(colors.accent)
      .font('Helvetica-Bold')
      .text(strategy.phase, 80, yPos, { width: doc.page.width - 140 });

    yPos += 25;
    doc.fontSize(11)
      .fillColor(colors.dark)
      .font('Helvetica')
      .text(strategy.desc, 80, yPos, { width: doc.page.width - 140, lineGap: 4 });

    yPos += 55;
  });

  addSlideNumber(5, totalSlides);
  addTeaserNote();

  // ==================
  // SLIDE 6: OUR STORY
  // ==================
  newSlide();
  addHeader('Our Story', 'From a single shop to a leading lifestyle brand');

  yPos = 180;
  const timeline = [
    { year: '2016', title: 'A Dream Takes Root', desc: 'Opened first store as 69Slam franchise in Krabi' },
    { year: '2017-2019', title: 'Wave of Expansion', desc: 'Opened 4 more mono-brand stores with Havaianas, Quiksilver, and Roxy' },
    { year: '2020', title: 'Pivoting Through Pandemic', desc: 'Successfully pivoted to large multi-brand stores, richer selection' },
    { year: 'Today', title: 'Thriving & Growing', desc: 'Strong presence in Phuket and Hua Hin, ready for regional expansion' }
  ];

  timeline.forEach((event) => {
    doc.fontSize(12)
      .fillColor(colors.accent)
      .font('Helvetica-Bold')
      .text(event.year, 80, yPos, { width: 80 });

    doc.fontSize(12)
      .fillColor(colors.dark)
      .font('Helvetica-Bold')
      .text(event.title, 170, yPos, { width: 250 });

    doc.fontSize(10)
      .fillColor(colors.gray)
      .font('Helvetica')
      .text(event.desc, 170, yPos + 18, { width: doc.page.width - 230, lineGap: 4 });

    yPos += 70;
  });

  addSlideNumber(6, totalSlides);
  addTeaserNote();

  // ==================
  // SLIDE 7: WHY INVEST NOW
  // ==================
  newSlide();
  addHeader('Why Invest Now', 'Compelling investment highlights');

  yPos = 180;
  const highlights = [
    '✓ Proven Business Model: Successfully navigated market disruptions and emerged stronger',
    '✓ Established Market Presence: 6 profitable stores in prime tourist destinations',
    '✓ Strong Brand Portfolio: Curated mix of international brands + exclusive in-house styles',
    '✓ Growth Ready: Clear expansion strategy with identified target markets',
    '✓ Scalable Operations: Lean operational model with diversified revenue streams',
    '✓ Market Timing: Southeast Asia tourism recovery creating unprecedented opportunities',
    '✓ Experienced Team: Passionate leadership with deep local market expertise'
  ];

  highlights.forEach((highlight) => {
    doc.fontSize(13)
      .fillColor(colors.dark)
      .font('Helvetica')
      .text(highlight, 80, yPos, { width: doc.page.width - 140, lineGap: 6 });
    yPos += 40;
  });

  addSlideNumber(7, totalSlides);
  addTeaserNote();

  // ==================
  // SLIDE 8: NEXT STEPS
  // ==================
  newSlide();
  addHeader('Next Steps', 'Let\'s explore this opportunity together');

  yPos = 200;
  doc.fontSize(14)
    .fillColor(colors.dark)
    .font('Helvetica')
    .text('This preliminary teaser provides an overview of the Overboard Asia investment opportunity. We invite qualified investors to connect with us for:', 80, yPos, {
      width: doc.page.width - 160,
      lineGap: 8
    });

  yPos += 90;
  addBullet('Detailed financial statements and performance metrics', yPos);
  yPos += 35;
  addBullet('Comprehensive market analysis and expansion plans', yPos);
  yPos += 35;
  addBullet('Investment terms and structure discussions', yPos);
  yPos += 35;
  addBullet('Store visits and team introductions', yPos);

  yPos += 80;
  doc.fontSize(16)
    .fillColor(colors.accent)
    .font('Helvetica-Bold')
    .text('Contact Information', 80, yPos);

  yPos += 35;
  doc.fontSize(12)
    .fillColor(colors.dark)
    .font('Helvetica')
    .text('Website: ', 80, yPos, { continued: true })
    .fillColor(colors.primary)
    .text('https://overboard-corp.netlify.app');

  yPos += 25;
  doc.fontSize(12)
    .fillColor(colors.dark)
    .text('Email: ', 80, yPos, { continued: true })
    .fillColor(colors.primary)
    .text('Use contact form on our website');

  addSlideNumber(8, totalSlides);
  addTeaserNote();

  // Finalize PDF
  doc.end();

  stream.on('finish', () => {
    console.log('✅ Investor deck PDF generated successfully!');
    console.log(`📄 Location: ${outputPath}`);
    console.log(`📏 File size: ${(fs.statSync(outputPath).size / 1024).toFixed(2)} KB`);
    console.log('\n🎯 Deck includes:');
    console.log('   ✓ Executive Summary');
    console.log('   ✓ Market Opportunity');
    console.log('   ✓ Current Operations (6 stores)');
    console.log('   ✓ Growth Strategy (4 phases)');
    console.log('   ✓ Company Story Timeline');
    console.log('   ✓ Investment Highlights');
    console.log('   ✓ Next Steps & Contact Info');
    console.log('   ✓ Teaser disclaimer on every page');
  });

  stream.on('error', (err) => {
    console.error('❌ Error generating PDF:', err);
  });
}

createDeck();
