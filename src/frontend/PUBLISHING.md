# Publishing Checklist

This document outlines the steps to make changes live and verify deployment.

## Pre-Deployment

1. **Verify Content**: Ensure all text, images, and functionality are correct in the local development environment
2. **Test Interactions**: Click through all interactive elements (buttons, links, animations)
3. **Check Responsive Design**: Test on mobile, tablet, and desktop viewports

## Deployment Steps

1. **Build the Application**:
   ```bash
   npm run build
   ```

2. **Deploy to Production**:
   ```bash
   dfx deploy --network ic
   ```
   Or use your specific deployment command for the hosting platform.

3. **Note the Deployment URL**: Confirm the shareable link (e.g., https://caffeine.ai/chat/019c2016-f519-7768-a217-0bd548a606d8)

## Post-Deployment Verification

### Critical Checks (Must Pass)

1. **Hard Refresh Test**:
   - Open the shareable link in your browser
   - Press `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac) to force a hard refresh
   - Verify the latest content appears (check the main prompt text: "Maniha will you be my valentines")

2. **Incognito/Private Window Test**:
   - Open the shareable link in an incognito/private browsing window
   - Verify all content loads correctly without any cached data
   - Test all interactive elements (Yes/No buttons, animations)

3. **Mobile Device Test**:
   - Open the link on a mobile device
   - Verify responsive layout and touch interactions work properly

### Content Verification

- [ ] Main prompt displays: "Maniha will you be my valentines"
- [ ] Yes button grows larger when No is clicked
- [ ] Success message appears when Yes is clicked
- [ ] Floating hearts animation is visible
- [ ] Background image loads correctly
- [ ] Footer displays with caffeine.ai link

### Performance Checks

- [ ] Page loads within 3 seconds
- [ ] No console errors in browser developer tools
- [ ] All assets (images, fonts) load successfully
- [ ] Animations run smoothly

## Troubleshooting

### If Old Content Still Appears

1. **Clear Browser Cache**:
   - Chrome: Settings > Privacy > Clear browsing data > Cached images and files
   - Firefox: Settings > Privacy > Clear Data > Cached Web Content
   - Safari: Develop > Empty Caches

2. **Check CDN Cache** (if applicable):
   - Wait 5-10 minutes for CDN propagation
   - Use cache purge tools if available

3. **Verify Deployment**:
   - Check deployment logs for errors
   - Confirm the build completed successfully
   - Verify the correct version was deployed

### Common Issues

- **Blank screen**: Check browser console for JavaScript errors
- **Missing images**: Verify asset paths and deployment includes all files
- **Styling issues**: Ensure CSS files are properly bundled and loaded

## Sharing the Link

Once all verification checks pass, the shareable link is ready:

**Shareable URL**: https://caffeine.ai/chat/019c2016-f519-7768-a217-0bd548a606d8

You can share this link directly via:
- Text message
- Email
- Social media
- QR code (generate using a QR code tool)

---

**Last Updated**: February 7, 2026
