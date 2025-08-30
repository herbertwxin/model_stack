/**
 * Font Scale Analysis Script
 * This script analyzes the homepage component for font consistency and responsive behavior
 */

const fs = require('fs');
const path = require('path');

// Read the homepage component
const homepageContent = fs.readFileSync(
  path.join(__dirname, 'src/app/page.tsx'), 
  'utf8'
);

// Define expected font classes based on the design document
const expectedFontClasses = {
  sectionHeaders: 'text-xl font-semibold',
  bodyText: 'text-base',
  metadata: 'text-sm',
  microText: 'text-xs',
  interactivePrimary: 'text-base font-medium',
  interactiveSecondary: 'text-sm font-medium'
};

// Extract all font-related classes from the component
const fontClassRegex = /(?:text-(?:xs|sm|base|lg|xl|2xl|3xl)|font-(?:normal|medium|semibold|bold))/g;
const foundClasses = homepageContent.match(fontClassRegex) || [];

// Count occurrences of each class
const classCount = {};
foundClasses.forEach(cls => {
  classCount[cls] = (classCount[cls] || 0) + 1;
});

console.log('=== FONT SCALE ANALYSIS REPORT ===\n');

console.log('1. FONT CLASSES FOUND:');
Object.entries(classCount)
  .sort(([,a], [,b]) => b - a)
  .forEach(([cls, count]) => {
    console.log(`   ${cls}: ${count} occurrences`);
  });

console.log('\n2. SECTION HEADER ANALYSIS:');
const sectionHeaderRegex = /<h2[^>]*className="([^"]*)"[^>]*>([^<]+)</g;
let match;
const sectionHeaders = [];
while ((match = sectionHeaderRegex.exec(homepageContent)) !== null) {
  sectionHeaders.push({
    title: match[2].trim(),
    classes: match[1]
  });
}

sectionHeaders.forEach(header => {
  const isConsistent = header.classes.includes('text-xl font-semibold');
  console.log(`   "${header.title}": ${header.classes} ${isConsistent ? '✓' : '✗'}`);
});

console.log('\n3. BODY TEXT ANALYSIS:');
const bodyTextRegex = /<p[^>]*className="([^"]*text-(?:base|lg)[^"]*)"[^>]*>/g;
const bodyTexts = [];
while ((match = bodyTextRegex.exec(homepageContent)) !== null) {
  bodyTexts.push(match[1]);
}

const consistentBodyText = bodyTexts.every(cls => cls.includes('text-base'));
console.log(`   Body text consistency: ${consistentBodyText ? '✓' : '✗'}`);
bodyTexts.forEach(cls => {
  console.log(`   - ${cls}`);
});

console.log('\n4. INTERACTIVE ELEMENTS ANALYSIS:');
const linkRegex = /<(?:Link|a)[^>]*className="([^"]*)"[^>]*>/g;
const linkClasses = [];
while ((match = linkRegex.exec(homepageContent)) !== null) {
  linkClasses.push(match[1]);
}

linkClasses.forEach(cls => {
  console.log(`   - ${cls}`);
});

console.log('\n5. RESPONSIVE GRID ANALYSIS:');
const gridRegex = /grid[^"]*lg:grid-cols-\d+/g;
const gridClasses = homepageContent.match(gridRegex) || [];
console.log(`   Grid classes found: ${gridClasses.length > 0 ? '✓' : '✗'}`);
gridClasses.forEach(cls => {
  console.log(`   - ${cls}`);
});

console.log('\n6. RECOMMENDATIONS:');
const recommendations = [];

// Check for inconsistent section headers
const inconsistentHeaders = sectionHeaders.filter(h => !h.classes.includes('text-xl font-semibold'));
if (inconsistentHeaders.length > 0) {
  recommendations.push('Some section headers may need font size adjustment');
}

// Check for mixed body text sizes
if (!consistentBodyText) {
  recommendations.push('Body text sizes should be standardized to text-base');
}

// Check for responsive considerations
const hasResponsiveGrid = homepageContent.includes('lg:grid-cols');
if (!hasResponsiveGrid) {
  recommendations.push('Consider adding responsive grid classes for better mobile experience');
}

if (recommendations.length === 0) {
  console.log('   ✓ Font scaling appears consistent and well-structured');
} else {
  recommendations.forEach(rec => {
    console.log(`   - ${rec}`);
  });
}

console.log('\n7. RESPONSIVE BREAKPOINT ANALYSIS:');
const responsiveClasses = homepageContent.match(/(?:sm|md|lg|xl|2xl):[^"\s]+/g) || [];
const breakpointCount = {};
responsiveClasses.forEach(cls => {
  const breakpoint = cls.split(':')[0];
  breakpointCount[breakpoint] = (breakpointCount[breakpoint] || 0) + 1;
});

console.log('   Responsive classes by breakpoint:');
Object.entries(breakpointCount).forEach(([bp, count]) => {
  console.log(`   - ${bp}: ${count} classes`);
});

console.log('\n=== ANALYSIS COMPLETE ===');