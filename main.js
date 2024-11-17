const { app, BrowserWindow, nativeTheme } = require('electron');

app.whenReady().then(() => {
  const win = new BrowserWindow({ 
    width: 800, 
    height: 600, 
    transparent: true,
    webPreferences: {
      enableBlinkFeatures: 'CSSBackdropFilter',
    },
  });

  // Remove the default menu bar
  win.setMenuBarVisibility(false);
  win.setAutoHideMenuBar(true); // Hides the menu bar, but it can be shown with the Alt key (optional).

  win.loadURL('https://zenn.dev/akidoki'); // 表示する外部サイト

  // CSSを挿入してスタイルを変更
  win.webContents.on('dom-ready', () => {
    win.webContents.executeJavaScript(`
      // カスタムプロパティの値を変更
      document.documentElement.style.setProperty('--c-bg-base', '#adb5bd50'); // home page back
      document.documentElement.style.setProperty('--c-bg-primary-lighter', '#49505750'); // top page back
      document.documentElement.style.setProperty('--c-bg-secondary', '#343a4050'); // home page back2
      document.documentElement.style.setProperty('--c-bg-neutral', '#49505730'); // back
      document.documentElement.style.setProperty('--c-bg-neutral-lighter', '#49505750'); // back
      document.documentElement.style.setProperty('--c-bg-neutral-lightest', '#ced4da50'); // inputs
      document.documentElement.style.setProperty('--c-blue-400', '#62a0ea30'); // top banner
      document.documentElement.style.setProperty('--c-button-primary', '#62a0eaC0'); // login button
      document.documentElement.style.setProperty('--c-button-primary-hover', '#62a0eaE0'); // login button hover
      document.documentElement.style.setProperty('--c-text-lower-priority', '#dee2e6'); // sub text color
      document.documentElement.style.setProperty('--c-text-low-priority', '#f1f3f5'); // sub text color
      document.documentElement.style.setProperty('--c-text-body', '#f8f9fa'); // color
    `);
    win.webContents.insertCSS(`
      /* top page */
      .View_inner__ygVA3 {
        background-color: var(--c-bg-base) !important; 
      }
      /* top page navbar */
      .ExploreNav_nav__wOwhN {
        background: #adb5bd30 !important;
      }
      /* top page explore button */
      .ExploreNav_childNav__uQuQY {
        background: var(--c-button-primary) !important;
      }
      .ExploreNav_childNavLink__txJ8p[aria-current=page] {
        background: var(--c-button-primary-hover) !important;
      }
      /* Foloring switch */
      .ToggleSwitch_switchMark__8yaOY {
        background: var(--c-gray-300) !important;
      }

      /* toppage & homepage list icon background and search tag page list */
      .ArticleList_emoji__C9rT3, .ArticleCard_emojiContainer__cmNrd, .TopicScraps_container__kYb8v {
        background: #adb5bd30 !important;
      }

      /* popover back */
      .usePopover_popover__H67Sl {
        background: #495057 !important;
      }

      /* scrap list & comment list */
      .UserScraps_rows__rpnRy, .UserComments_itemsContainer__8u7Yx {
        background: var(--c-bg-primary-lighter) !important;
      }

      /* blog page navbar */
      .ContentStickyNavForMobile_container__153a8 {
        background-color: var(--c-bg-base) !important;
      }
      /* blog page popover */
      .ArticleMobileHeaderToc_tocContainer__HK0Jp {
        background: #495057 !important;
      }

      /* create article page popover */
      .EditorRightSidebarContainer_sidebar__PSS_J {
        background: #495057 !important;
      }
      /* ceate article page save menu input */
      .TopicField_container__TuK_M .rs__control {
        background: #495057 !important;
      }
      .ͼq .cm-scroller, .ͼ2 .cm-content {
        color: #fff !important;
      }

      /* ceate book page save menu item */
      .RadioCard_item__p3HnH {
        background: #495057 !important;
      }

      /* blog page link color */
      .znc a {
        color: #a5d8ff !important;
      }

      /* scrap page */
      .ThreadItemContent_parentItem__2BweX, .ArticleComments_threadEditorContainer__P2Ay2, .ScrapThread_threadEditorContainer__SdjL0, .View_sidebar__eU_IO {
        background: var(--c-bg-base) !important;
      }

      /* scrap create page */
      .TextField_input__Mtdob, .TextField_textarea__1a4nt, .ScrapThread_empty__BqYjH {
        background: var(--c-bg-base) !important;
      }


      /* secondary button */
      .Button_secondary__cM38g {
        background: var(--c-bg-primary-lighter) !important;
      }
      /* scrap kannri page responsive select menu bar button */
      .HorizontalScrollContainer_buttonRight__USnjA {
        background: linear-gradient(90deg,#adb5bd30,#adb5bd 50%) !important;
      }
      /* search input */
      .KeywordSearchField_form__kyS5d {
        background: var(--c-bg-neutral-lightest) !important;
      }
      /* input */
      .KeywordSearchField_input__nIFfL, .FullSizeEditor_titleField__SIUOR {
      //   background: var(--c-bg-neutral-lightest) !important;
        color: #fff;
      }

      /* follower modal */
      .AppModal_container__AaSRy {
        background: #495057 !important; 
      }

      /* tag search page button list */
      .TabLinkGroup_container__CFVHr {
        background: var(--c-button-primary) !important;
      }
    `);

    // OSテーマ変更時のイベントリスナー not working
    nativeTheme.on('updated', () => {
      const isDarkMode = nativeTheme.shouldUseDarkColors;
      console.log(`テーマが変更されました: ${isDarkMode ? 'ダークモード' : 'ライトモード'}`);
    });

  });
});

app.on("window-all-closed", () => {
    app.quit();
});
