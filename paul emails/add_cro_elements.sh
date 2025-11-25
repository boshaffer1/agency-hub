#!/bin/bash

# Add FAQ section, author credentials box, and ROI stats to both affiliate pages

for file in cfi-fpap-affiliate-page-v2.html wharton-wsp-affiliate-page-v2.html; do
    
    # Determine program-specific content
    if [[ "$file" == *"cfi"* ]]; then
        PROGRAM="CFI FPAP"
        FAQ_CONTENT='<div class="faq-section" style="margin: 60px 0; padding: 40px; background: #f8f9fa; border-radius: 12px;">
            <h2 style="color: #1e3a5f; margin-bottom: 30px; text-align: center;">Frequently Asked Questions</h2>
            
            <div class="faq-item" style="margin-bottom: 25px;">
                <h3 style="color: #4a6fa5; font-size: 1.2em; margin-bottom: 10px;">Is the CFI FPAP certification worth it?</h3>
                <p style="line-height: 1.8;">Yes, especially for early-career professionals. Students typically see 10-20% salary increases and 2-4x improvement in interview success rates. The investment pays back in 6-12 months for most people.</p>
            </div>
            
            <div class="faq-item" style="margin-bottom: 25px;">
                <h3 style="color: #4a6fa5; font-size: 1.2em; margin-bottom: 10px;">How long does it take to complete?</h3>
                <p style="line-height: 1.8;">Most students complete the FPAP certification in 6-8 weeks studying 10-15 hours per week. You can go faster or slower based on your schedule.</p>
            </div>
            
            <div class="faq-item" style="margin-bottom: 25px;">
                <h3 style="color: #4a6fa5; font-size: 1.2em; margin-bottom: 10px;">Do I need prior finance experience?</h3>
                <p style="line-height: 1.8;">No. The program is designed for beginners. If you'\''re comfortable with Excel basics, you'\''re ready to start.</p>
            </div>
            
            <div class="faq-item" style="margin-bottom: 25px;">
                <h3 style="color: #4a6fa5; font-size: 1.2em; margin-bottom: 10px;">What'\''s included with the discount code?</h3>
                <p style="line-height: 1.8;">The code <strong>FPAGUY30</strong> gives you 30% off the full program price. You get immediate access to all courses, templates, and lifetime updates.</p>
            </div>
            
            <div class="faq-item" style="margin-bottom: 25px;">
                <h3 style="color: #4a6fa5; font-size: 1.2em; margin-bottom: 10px;">Can I get a refund if it'\''s not right for me?</h3>
                <p style="line-height: 1.8;">Yes. CFI offers a 7-day money-back guarantee. If you'\''re not satisfied, contact their support for a full refund.</p>
            </div>
        </div>'
    else
        PROGRAM="Wharton/WSP"
        FAQ_CONTENT='<div class="faq-section" style="margin: 60px 0; padding: 40px; background: #f8f9fa; border-radius: 12px;">
            <h2 style="color: #1e3a5f; margin-bottom: 30px; text-align: center;">Frequently Asked Questions</h2>
            
            <div class="faq-item" style="margin-bottom: 25px;">
                <h3 style="color: #4a6fa5; font-size: 1.2em; margin-bottom: 10px;">Is the Wharton/WSP certificate worth it?</h3>
                <p style="line-height: 1.8;">Yes, particularly for mid-career professionals seeking prestige and career acceleration. The Wharton name carries significant weight, and students typically see 15-25% salary increases within a year.</p>
            </div>
            
            <div class="faq-item" style="margin-bottom: 25px;">
                <h3 style="color: #4a6fa5; font-size: 1.2em; margin-bottom: 10px;">How long is the program?</h3>
                <p style="line-height: 1.8;">The program runs for 16 weeks in a cohort-based format. Expect to dedicate 8-12 hours per week including live sessions, assignments, and group work.</p>
            </div>
            
            <div class="faq-item" style="margin-bottom: 25px;">
                <h3 style="color: #4a6fa5; font-size: 1.2em; margin-bottom: 10px;">What makes this different from CFI or other online courses?</h3>
                <p style="line-height: 1.8;">This is a cohort-based program with live instruction from Wharton faculty and Wall Street Prep experts. You get real-time interaction, peer networking, and the Wharton credential on your resume.</p>
            </div>
            
            <div class="faq-item" style="margin-bottom: 25px;">
                <h3 style="color: #4a6fa5; font-size: 1.2em; margin-bottom: 10px;">When do cohorts start?</h3>
                <p style="line-height: 1.8;">New cohorts typically start 3-4 times per year. Check the program page for current enrollment dates and deadlines.</p>
            </div>
            
            <div class="faq-item" style="margin-bottom: 25px;">
                <h3 style="color: #4a6fa5; font-size: 1.2em; margin-bottom: 10px;">Is there a refund policy?</h3>
                <p style="line-height: 1.8;">Yes. Wharton Online offers a refund during the first week of the program. After that, refunds are handled on a case-by-case basis.</p>
            </div>
        </div>'
    fi
    
    # Add author credentials box before FAQ section
    AUTHOR_BOX='<div class="author-credentials-box" style="margin: 60px 0; padding: 30px; background: linear-gradient(135deg, #1e3a5f 0%, #4a6fa5 100%); border-radius: 12px; color: white;">
        <h3 style="color: #b8956a; margin-bottom: 20px; font-size: 1.4em;">Why Trust This Review?</h3>
        <div style="display: flex; align-items: center; gap: 25px; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 250px;">
                <h4 style="color: white; margin-bottom: 15px;">Paul Barnhurst (The FP&A Guy)</h4>
                <ul style="list-style: none; padding: 0; margin: 0;">
                    <li style="margin: 8px 0; padding-left: 25px; position: relative;">
                        <span style="position: absolute; left: 0; color: #b8956a;">✓</span> CPA & Corporate Finance Expert
                    </li>
                    <li style="margin: 8px 0; padding-left: 25px; position: relative;">
                        <span style="position: absolute; left: 0; color: #b8956a;">✓</span> CFI Program Contributor
                    </li>
                    <li style="margin: 8px 0; padding-left: 25px; position: relative;">
                        <span style="position: absolute; left: 0; color: #b8956a;">✓</span> Wharton Online Instructor
                    </li>
                    <li style="margin: 8px 0; padding-left: 25px; position: relative;">
                        <span style="position: absolute; left: 0; color: #b8956a;">✓</span> 100,000+ LinkedIn Followers
                    </li>
                </ul>
                <p style="margin-top: 20px; font-size: 0.95em; line-height: 1.6;">
                    Created 2 CFI FPAP courses, served as Wharton Online instructor, and taught 27,000+ students across multiple platforms. I know these programs from the inside out.
                </p>
            </div>
        </div>
    </div>'
    
    # Add ROI stats section after the main content, before FAQ
    ROI_STATS='<div class="roi-section" style="margin: 60px 0; padding: 40px; background: #fff; border: 2px solid #b8956a; border-radius: 12px;">
        <h2 style="color: #1e3a5f; margin-bottom: 30px; text-align: center;">Investment & Returns</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; text-align: center;">
            <div>
                <div style="font-size: 2.5em; font-weight: 700; color: #b8956a; margin-bottom: 10px;">10-20%</div>
                <p style="color: #4a6fa5; font-weight: 600;">Average Salary Increase</p>
            </div>
            <div>
                <div style="font-size: 2.5em; font-weight: 700; color: #b8956a; margin-bottom: 10px;">2-4x</div>
                <p style="color: #4a6fa5; font-weight: 600;">Interview Success Rate</p>
            </div>
            <div>
                <div style="font-size: 2.5em; font-weight: 700; color: #b8956a; margin-bottom: 10px;">6-12 mo</div>
                <p style="color: #4a6fa5; font-weight: 600;">Typical Payback Period</p>
            </div>
        </div>
    </div>'
    
    # Insert author box, ROI stats, and FAQ before the final CTA (before </body>)
    perl -i -0777 -pe 's|(</body>)|'"$AUTHOR_BOX"'\n\n'"$ROI_STATS"'\n\n'"$FAQ_CONTENT"'\n\n$1|s' "$file"
    
    echo "Added CRO elements to $file"
done

echo "All CRO elements added successfully!"
