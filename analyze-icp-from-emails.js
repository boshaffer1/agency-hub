const fs = require('fs');

const emailData = JSON.parse(fs.readFileSync('james-camp-all-emails.json', 'utf8'));
const emails = emailData.emails;

console.log(`\n📊 Analyzing ${emails.length} emails for ICP patterns...\n`);

const analysis = {
  subjectPatterns: {
    questions: [],
    numbers: [],
    opportunities: [],
    timeframes: [],
    emotions: []
  },
  painPoints: {
    money: [],
    time: [],
    fear: [],
    confusion: [],
    mistakes: []
  },
  desires: {
    freedom: [],
    income: [],
    acquisition: [],
    lifestyle: [],
    proof: []
  },
  objections: {
    skepticism: [],
    time: [],
    money: [],
    capability: [],
    trust: []
  },
  language: {
    questions: [],
    callouts: [],
    frameworks: [],
    specifics: []
  },
  topTopics: {},
  successStories: [],
  pricePoints: [],
  timeframes: []
};

// Analyze each email
emails.forEach(email => {
  const subject = email.subject || '';
  const content = email.content || '';
  const description = email.description || '';
  const combined = `${subject} ${content} ${description}`.toLowerCase();

  // Subject line patterns
  if (subject.includes('?')) {
    analysis.subjectPatterns.questions.push(subject);
  }
  if (subject.match(/\$[\d,]+|\d+k|\d+%/)) {
    analysis.subjectPatterns.numbers.push(subject);
  }
  if (subject.match(/flip|buy|acquire|website|business/i)) {
    analysis.subjectPatterns.opportunities.push(subject);
  }
  if (subject.match(/\d+ (hours?|days?|weeks?|months?)/i)) {
    analysis.subjectPatterns.timeframes.push(subject);
  }

  // Pain points
  if (combined.match(/crypto|nft|down \d+%|lost|mistake|burned/)) {
    analysis.painPoints.money.push(subject);
  }
  if (combined.match(/time|hours|busy|quick|fast|30 min/)) {
    analysis.painPoints.time.push(subject);
  }
  if (combined.match(/scared|afraid|worry|risk|safe|dangerous/)) {
    analysis.painPoints.fear.push(subject);
  }
  if (combined.match(/confused|overwhelm|analysis paralysis|don't know which/)) {
    analysis.painPoints.confusion.push(subject);
  }
  if (combined.match(/mistake|wrong|fail|red flag/)) {
    analysis.painPoints.mistakes.push(subject);
  }

  // Desires
  if (combined.match(/freedom|quit|escape|location independent|digital nomad/)) {
    analysis.desires.freedom.push(subject);
  }
  if (combined.match(/\$\d+\/month|passive income|cash flow|recurring revenue/)) {
    analysis.desires.income.push(subject);
  }
  if (combined.match(/buy|acquire|purchase|flip|deal/)) {
    analysis.desires.acquisition.push(subject);
  }
  if (combined.match(/bali|thailand|travel|anywhere|remote/)) {
    analysis.desires.lifestyle.push(subject);
  }
  if (combined.match(/success story|case study|student|member made/)) {
    analysis.desires.proof.push(subject);
  }

  // Objections
  if (combined.match(/not a guru|not telling you to buy|do your own research|scam/)) {
    analysis.objections.skepticism.push(subject);
  }
  if (combined.match(/don't have time|busy|4 hours|30 minutes/)) {
    analysis.objections.time.push(subject);
  }
  if (combined.match(/don't have money|\$\d+ minimum|capital|budget/)) {
    analysis.objections.money.push(subject);
  }
  if (combined.match(/i don't know how|never done|first time|beginner/)) {
    analysis.objections.capability.push(subject);
  }

  // Extract price points mentioned
  const priceMatches = combined.match(/\$[\d,]+/g);
  if (priceMatches) {
    analysis.pricePoints.push(...priceMatches);
  }

  // Extract timeframes
  const timeMatches = combined.match(/\d+ (hours?|days?|weeks?|months?|years?)/gi);
  if (timeMatches) {
    analysis.timeframes.push(...timeMatches);
  }

  // Extract questions (starting with interrogatives)
  const questionMatches = content.match(/\b(are you|do you|have you|can you|what if|why|how|when|where|which)\b[^.?!]{0,100}[?]/gi);
  if (questionMatches) {
    analysis.language.questions.push(...questionMatches.slice(0, 3));
  }

  // Extract callouts (direct address)
  const calloutMatches = content.match(/\b(you\b[^.?!]{0,80}[.?!])/gi);
  if (calloutMatches) {
    analysis.language.callouts.push(...calloutMatches.slice(0, 2));
  }

  // Track topics by keyword frequency
  const keywords = ['flip', 'buy', 'business', 'website', 'content', 'saas', 'ecommerce', 'affiliate', 'amazon', 'seo'];
  keywords.forEach(keyword => {
    if (combined.includes(keyword)) {
      analysis.topTopics[keyword] = (analysis.topTopics[keyword] || 0) + 1;
    }
  });
});

// Create summary report
const report = {
  totalEmails: emails.length,

  mostEngagingSubjectPatterns: {
    questions: analysis.subjectPatterns.questions.length,
    withNumbers: analysis.subjectPatterns.numbers.length,
    opportunities: analysis.subjectPatterns.opportunities.length,
    withTimeframes: analysis.subjectPatterns.timeframes.length,
    exampleQuestions: analysis.subjectPatterns.questions.slice(0, 10),
    exampleNumbers: analysis.subjectPatterns.numbers.slice(0, 10),
    exampleOpportunities: analysis.subjectPatterns.opportunities.slice(0, 10)
  },

  primaryPainPoints: {
    moneyLosses: analysis.painPoints.money.length,
    timePressure: analysis.painPoints.time.length,
    fearBased: analysis.painPoints.fear.length,
    confusion: analysis.painPoints.confusion.length,
    mistakePrevention: analysis.painPoints.mistakes.length,
    examples: {
      money: analysis.painPoints.money.slice(0, 5),
      time: analysis.painPoints.time.slice(0, 5),
      fear: analysis.painPoints.fear.slice(0, 5)
    }
  },

  primaryDesires: {
    freedom: analysis.desires.freedom.length,
    income: analysis.desires.income.length,
    acquisition: analysis.desires.acquisition.length,
    lifestyle: analysis.desires.lifestyle.length,
    proof: analysis.desires.proof.length,
    examples: {
      freedom: analysis.desires.freedom.slice(0, 5),
      income: analysis.desires.income.slice(0, 5),
      acquisition: analysis.desires.acquisition.slice(0, 5)
    }
  },

  objectionsAddressed: {
    skepticism: analysis.objections.skepticism.length,
    time: analysis.objections.time.length,
    money: analysis.objections.money.length,
    capability: analysis.objections.capability.length,
    examples: {
      skepticism: analysis.objections.skepticism.slice(0, 5),
      time: analysis.objections.time.slice(0, 5)
    }
  },

  languagePatterns: {
    totalQuestions: analysis.language.questions.length,
    exampleQuestions: [...new Set(analysis.language.questions)].slice(0, 15),
    commonCallouts: [...new Set(analysis.language.callouts)].slice(0, 10)
  },

  pricePointsRange: {
    all: [...new Set(analysis.pricePoints)].sort((a, b) => {
      const numA = parseInt(a.replace(/[$,]/g, ''));
      const numB = parseInt(b.replace(/[$,]/g, ''));
      return numA - numB;
    }).slice(0, 20),
    mostCommon: getMostCommon(analysis.pricePoints, 10)
  },

  timeframesUsed: {
    all: [...new Set(analysis.timeframes)],
    mostCommon: getMostCommon(analysis.timeframes, 10)
  },

  topTopics: Object.entries(analysis.topTopics)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10)
    .reduce((obj, [key, val]) => ({ ...obj, [key]: val }), {})
};

function getMostCommon(arr, count) {
  const frequency = {};
  arr.forEach(item => {
    frequency[item] = (frequency[item] || 0) + 1;
  });
  return Object.entries(frequency)
    .sort(([,a], [,b]) => b - a)
    .slice(0, count)
    .map(([item, count]) => ({ item, count }));
}

// Save detailed analysis
fs.writeFileSync('icp-email-analysis.json', JSON.stringify(report, null, 2));

// Print summary to console
console.log('✅ Analysis complete!\n');
console.log('📧 Subject Line Patterns:');
console.log(`   - Questions: ${report.mostEngagingSubjectPatterns.questions} emails`);
console.log(`   - With Numbers: ${report.mostEngagingSubjectPatterns.withNumbers} emails`);
console.log(`   - Opportunities: ${report.mostEngagingSubjectPatterns.opportunities} emails\n`);

console.log('😰 Primary Pain Points:');
console.log(`   - Money/Crypto Losses: ${report.primaryPainPoints.moneyLosses} emails`);
console.log(`   - Time Pressure: ${report.primaryPainPoints.timePressure} emails`);
console.log(`   - Fear-Based: ${report.primaryPainPoints.fearBased} emails`);
console.log(`   - Confusion/Overwhelm: ${report.primaryPainPoints.confusion} emails\n`);

console.log('🎯 Primary Desires:');
console.log(`   - Freedom/Independence: ${report.primaryDesires.freedom} emails`);
console.log(`   - Income/Cash Flow: ${report.primaryDesires.income} emails`);
console.log(`   - Acquisition Focus: ${report.primaryDesires.acquisition} emails\n`);

console.log('🛡️ Objections Addressed:');
console.log(`   - Skepticism/Trust: ${report.objectionsAddressed.skepticism} emails`);
console.log(`   - Time Concerns: ${report.objectionsAddressed.time} emails`);
console.log(`   - Money Concerns: ${report.objectionsAddressed.money} emails\n`);

console.log('📝 Language Patterns:');
console.log(`   - Total Questions Found: ${report.languagePatterns.totalQuestions}`);
console.log(`   - Top Questions:`);
report.languagePatterns.exampleQuestions.slice(0, 5).forEach(q => {
  console.log(`     • ${q}`);
});

console.log('\n💰 Price Points:');
console.log('   Most Common:');
report.pricePointsRange.mostCommon.slice(0, 5).forEach(p => {
  console.log(`     • ${p.item} (mentioned ${p.count} times)`);
});

console.log('\n⏱️ Timeframes:');
console.log('   Most Common:');
report.timeframesUsed.mostCommon.slice(0, 5).forEach(t => {
  console.log(`     • ${t.item} (mentioned ${t.count} times)`);
});

console.log('\n📊 Top Topics:');
Object.entries(report.topTopics).slice(0, 5).forEach(([topic, count]) => {
  console.log(`   • ${topic}: ${count} emails`);
});

console.log('\n💾 Full analysis saved to: icp-email-analysis.json\n');
