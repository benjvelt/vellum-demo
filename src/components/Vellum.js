// Velt Setup: Authenticate - 1) Get the Velt client
import { useVeltClient, VeltPresence  } from '@veltdev/react';

import { useEffect, useState } from 'react';
import '../App.css';

export default function Vellum() {
    const { client } = useVeltClient();

    let [user,setUser] = useState("")

    // Velt Setup: Authenticate - 2) Create a useEffect hook
    useEffect(() => {
        if (client) {

        

        const randId = Math.floor(Math.random() * 9)

        // Velt Setup: Authenticate - 3) Fetch relevant user info
        const user = {
            userId: `${randId}`,
            name: `user${randId}`,
            email: `user${randId}@vellum.ai`,
            photoUrl: `https://i.pravatar.cc/30${randId}`
        };

        // Velt Setup: Authenticate - 4) Pass the user object to the SDK
        client.identify(user);

        // Velt Setup: Initialize Document - 5) Set a document ID
        client.setDocumentId('unique-document-id');

        //enables highlighting of elements
        let selectionElement = client.getSelectionElement()

        selectionElement.enableLiveSelection()

        console.log("user: ", user)
        setUser(user)

        }
    }, [client]);


    return (
        <div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            <meta name="next-head-count" content={3} />
            <meta name="theme-color" content="#7479FF" />
            <meta name="emotion-insertion-point" content="" />
            <noscript data-n-css="" />
            <title>Vellum | Sandbox</title>
            <div id="__next">
                <div className="MuiBox-root mui-style-k008qs">
                <main className="MuiBox-root mui-style-tsfwo2">
                    <div className="MuiStack-root mui-style-1r7pci0">
                    <div
                        className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiAlert-root MuiAlert-filledInfo MuiAlert-filled mui-style-1rsq7gm"
                        role="alert"
                    >
                        <div className="MuiAlert-icon mui-style-1l54tgj">
                        <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit mui-style-1cw4hi4"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="InfoOutlinedIcon"
                        >
                            <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z" />
                        </svg>
                        </div>
                        <div className="MuiAlert-message mui-style-1xsto0d">
                        <p className="MuiTypography-root MuiTypography-body1 mui-style-12nz3ni">
                            You have 14 days remaining of your free trial of Vellum.
                            Reach out to us{" "}
                            <a
                            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways next-link mui-style-or1y1c"
                            href="mailto:sales@vellum.ai?subject=Upgrade+Vellum+Plan&body=Hi+Vellum+team,%0A%0AI%27d+love+to+keep+using+Vellum+moving+forward.+The+requested+details+are+below.%0A%0ARequested+plan:+<enter+chosen+Vellum+plan>%0ABilling+address:+<provide+your+company%27s+billing+address,+this+will+be+used+to+generate+an+invoice>%0A%0A(Optional+fields)%0AUse+case:+<how+do+you+plan+to+use+Vellum+moving+forward?+we+can+provide+some+tips+to+set+you+up+for+success>%0AProduct+feedback:+<what+do+you+wish+could+be+better+in+the+platform>%0A%0ABest,%0A+"
                            target="_blank"
                            >
                            {" "}
                            here{" "}
                            </a>{" "}
                            at any time for support or to learn more about our{" "}
                            <a
                            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways next-link mui-style-or1y1c"
                            href="https://www.vellum.ai/pricing"
                            target="_blank"
                            >
                            {" "}
                            pricing{" "}
                            </a>
                        </p>
                        </div>
                    </div>
                    <div className="MuiStack-root mui-style-t40y15">
                        <div className="MuiDrawer-root MuiDrawer-docked mui-style-1u0ciac">
                        <div className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft mui-style-ah5vto">
                            <div className="MuiStack-root mui-style-sfxoko">
                            <div className="MuiStack-root mui-style-1s8c52g">
                                <img
                                alt="Vellum Logo"
                                width={80}
                                height={40}
                                decoding="async"
                                data-nimg={1}
                                src="https://app.vellum.ai/vellum-logo-light.svg"
                                style={{ color: "transparent" }}
                                />
                                <div className="MuiBox-root mui-style-70onqu">
                                <div className="vel-show-on-hover">
                                    <div
                                    className="MuiStack-root mui-style-j7qwjs"
                                    style={{ opacity: 0, visibility: "hidden" }}
                                    >
                                    <div className="MuiStack-root mui-style-1gwyn7g">
                                        <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-ndbnha"
                                        tabIndex={0}
                                        type="button"
                                        >
                                        <svg
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                            focusable="false"
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                            data-testid="ChevronLeftIcon"
                                        >
                                            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                        </button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="MuiStack-root mui-style-15y75kh">
                            <nav className="MuiList-root MuiList-padding mui-style-1ontqvh">
                                <a
                                className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters Mui-selected MuiListItemButton-root MuiListItemButton-gutters Mui-selected mui-style-rt6ftd"
                                tabIndex={0}
                                id="playground-nav-item"
                                aria-label=""
                                href="/prompt-sandboxes"
                                style={{ textDecoration: "none" }}
                                >
                                <div className="MuiListItemIcon-root mui-style-5n5rd1">
                                    <svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="TextFieldsIcon"
                                    >
                                    <path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z" />
                                    </svg>
                                </div>
                                <div className="MuiListItemText-root mui-style-1tsvksn">
                                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary mui-style-qyqpz1">
                                    Prompts
                                    </span>
                                </div>
                                <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                </a>
                                <a
                                className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters mui-style-rt6ftd"
                                tabIndex={0}
                                aria-label=""
                                href="/document-indexes"
                                style={{ textDecoration: "none" }}
                                >
                                <div className="MuiListItemIcon-root mui-style-5n5rd1">
                                    <svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="LibraryBooksIcon"
                                    >
                                    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
                                    </svg>
                                </div>
                                <div className="MuiListItemText-root mui-style-1tsvksn">
                                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary mui-style-qyqpz1">
                                    Documents
                                    </span>
                                </div>
                                <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                </a>
                                <a
                                className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters mui-style-rt6ftd"
                                tabIndex={0}
                                aria-label=""
                                href="/workflow-sandboxes"
                                style={{ textDecoration: "none" }}
                                >
                                <div className="MuiListItemIcon-root mui-style-5n5rd1">
                                    <svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-arlcxm"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="AltRouteIcon"
                                    >
                                    <path d="m9.78 11.16-1.42 1.42c-.68-.69-1.34-1.58-1.79-2.94l1.94-.49c.32.89.77 1.5 1.27 2.01zM11 6 7 2 3 6h3.02c.02.81.08 1.54.19 2.17l1.94-.49C8.08 7.2 8.03 6.63 8.02 6H11zm10 0-4-4-4 4h2.99c-.1 3.68-1.28 4.75-2.54 5.88-.5.44-1.01.92-1.45 1.55-.34-.49-.73-.88-1.13-1.24L9.46 13.6c.93.85 1.54 1.54 1.54 3.4v5h2v-5c0-2.02.71-2.66 1.79-3.63 1.38-1.24 3.08-2.78 3.2-7.37H21z" />
                                    </svg>
                                </div>
                                <div className="MuiListItemText-root mui-style-1tsvksn">
                                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary mui-style-qyqpz1">
                                    Workflows
                                    </span>
                                </div>
                                <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                </a>
                                <a
                                className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters mui-style-rt6ftd"
                                tabIndex={0}
                                aria-label=""
                                href="/test-suites"
                                style={{ textDecoration: "none" }}
                                >
                                <div className="MuiListItemIcon-root mui-style-5n5rd1">
                                    <svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="SpeedIcon"
                                    >
                                    <path d="m20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z" />
                                    </svg>
                                </div>
                                <div className="MuiListItemText-root mui-style-1tsvksn">
                                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary mui-style-qyqpz1">
                                    Test Suites
                                    </span>
                                </div>
                                <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                </a>
                                <a
                                className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters mui-style-rt6ftd"
                                tabIndex={0}
                                aria-label=""
                                href="/deployments"
                                style={{ textDecoration: "none" }}
                                >
                                <div className="MuiListItemIcon-root mui-style-5n5rd1">
                                    <svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="ApiIcon"
                                    >
                                    <path d="m14 12-2 2-2-2 2-2 2 2zm-2-6 2.12 2.12 2.5-2.5L12 1 7.38 5.62l2.5 2.5L12 6zm-6 6 2.12-2.12-2.5-2.5L1 12l4.62 4.62 2.5-2.5L6 12zm12 0-2.12 2.12 2.5 2.5L23 12l-4.62-4.62-2.5 2.5L18 12zm-6 6-2.12-2.12-2.5 2.5L12 23l4.62-4.62-2.5-2.5L12 18z" />
                                    </svg>
                                </div>
                                <div className="MuiListItemText-root mui-style-1tsvksn">
                                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary mui-style-qyqpz1">
                                    Deployments
                                    </span>
                                </div>
                                <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                </a>
                                <a
                                className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters mui-style-rt6ftd"
                                tabIndex={0}
                                aria-label=""
                                href="/api-keys"
                                style={{ textDecoration: "none" }}
                                >
                                <div className="MuiListItemIcon-root mui-style-5n5rd1">
                                    <svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="KeyIcon"
                                    >
                                    <path d="M21 10h-8.35C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H13l2 2 2-2 2 2 4-4.04L21 10zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
                                    </svg>
                                </div>
                                <div className="MuiListItemText-root mui-style-1tsvksn">
                                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary mui-style-qyqpz1">
                                    API Keys
                                    </span>
                                </div>
                                <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                </a>
                            </nav>
                            <div className="MuiStack-root mui-style-sakohh">
                                <nav className="MuiList-root MuiList-padding mui-style-1ontqvh">
                                <button
                                    className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textSecondary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation MuiButton-root MuiButton-text MuiButton-textSecondary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation mui-style-1lqsbd3"
                                    tabIndex={0}
                                    type="button"
                                >
                                    Invite
                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                </button>
                                <a
                                    className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters mui-style-rt6ftd"
                                    href="https://vellum-ai.notion.site/Vellum-Help-Center-3611055293054ee8852b3d0cfdb7d092"
                                    tabIndex={0}
                                    target="_blank"
                                    aria-label=""
                                    style={{ textDecoration: "none" }}
                                >
                                    <div className="MuiListItemIcon-root mui-style-5n5rd1">
                                    <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                        focusable="false"
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        data-testid="HelpIcon"
                                    >
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                                    </svg>
                                    </div>
                                    <div className="MuiListItemText-root mui-style-1tsvksn">
                                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary mui-style-qyqpz1">
                                        Get Help
                                    </span>
                                    </div>
                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                </a>
                                <a
                                    className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters mui-style-rt6ftd"
                                    tabIndex={0}
                                    aria-label=""
                                    href="/organization"
                                    style={{ textDecoration: "none" }}
                                >
                                    <div className="MuiListItemIcon-root mui-style-5n5rd1">
                                    <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                        focusable="false"
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        data-testid="BusinessIcon"
                                    >
                                        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                                    </svg>
                                    </div>
                                    <div className="MuiListItemText-root mui-style-1tsvksn">
                                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary mui-style-qyqpz1">
                                        Organization
                                    </span>
                                    </div>
                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                </a>
                                <a
                                    className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters mui-style-rt6ftd"
                                    tabIndex={0}
                                    aria-label=""
                                    href="/profile"
                                    style={{ textDecoration: "none" }}
                                >
                                    <div className="MuiListItemIcon-root mui-style-5n5rd1">
                                    <div className="MuiAvatar-root MuiAvatar-circular mui-style-ogfacg">
                                        <img
                                        alt="Benjamin Lin"
                                        src={user.photoUrl}
                                        className="MuiAvatar-img mui-style-1hy9t21"
                                        />
                                    </div>
                                    </div>
                                    <div className="MuiListItemText-root mui-style-1tsvksn">
                                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary mui-style-qyqpz1">
                                        Profile: User <span>{user.userId}</span>
                                    </span>
                                    </div>
                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                </a>
                                </nav>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="MuiContainer-root mui-style-ced6ij">
                        <div
                            className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiAlert-root MuiAlert-standardWarning MuiAlert-standard mui-style-daoeyg"
                            role="alert"
                        >
                            <div className="MuiAlert-icon mui-style-1l54tgj">
                            <svg
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit mui-style-1cw4hi4"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="ReportProblemOutlinedIcon"
                            >
                                <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" />
                            </svg>
                            </div>
                            <div className="MuiAlert-message mui-style-1xsto0d">
                            <p className="MuiTypography-root MuiTypography-body1 mui-style-12nz3ni">
                                You can get started with the following LLM providers
                                right away: <b>Anthropic, MosaicML, Mystic, OpenAI</b>.
                                However, for continued use, or to use other providers,
                                you'll need to <b>provide your own</b> credentials via
                                the{" "}
                                <a
                                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways mui-style-or1y1c"
                                href="/api-keys"
                                >
                                API Keys
                                </a>{" "}
                                page.
                            </p>
                            </div>
                        </div>
                        <div className="MuiStack-root mui-style-l5c1s3">

                            <div className="MuiStack-root mui-style-fv2zs6">
                            <nav
                                className="MuiTypography-root MuiTypography-body1 MuiBreadcrumbs-root mui-style-jfknrv"
                                aria-label="breadcrumb"
                            >
                                <ol className="MuiBreadcrumbs-ol mui-style-nhb8h9">
                                <li className="MuiBreadcrumbs-li">
                                    <a
                                    className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineHover mui-style-tserl5"
                                    href="/prompt-sandboxes"
                                    >
                                    Prompt Sandboxes
                                    </a>
                                </li>
                                <li
                                    aria-hidden="true"
                                    className="MuiBreadcrumbs-separator mui-style-3mf706"
                                >
                                    /
                                </li>
                                <li className="MuiBreadcrumbs-li">
                                    <p className="MuiTypography-root MuiTypography-body1 mui-style-1kntbzt">
                                    Velt
                                    </p>
                                </li>
                                </ol>
                            </nav>

                            <div className="MuiStack-root mui-style-u4p24i">
                                <span
                                aria-label="Save a history item without making API calls to LLM providers. Keyboard shortcut: ⌘ + S

        All changes saved"
                                style={{display:"flex",alignItems:"center",justifyCenter:"center"}}
                                >
                                {/* Add Velt Presence Component */}
                                <VeltPresence/>
                                <button
                                    className="MuiButtonBase-root MuiButton-root MuiLoadingButton-root MuiButton-text MuiButton-textNeutral MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation MuiButton-root MuiLoadingButton-root MuiButton-text MuiButton-textNeutral MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation mui-style-sov7fx"
                                    tabIndex={0}
                                    type="button"
                                    id=":rj:"
                                    style={{ marginLeft:"2rem", marginRight: 32 }}
                                >
                                    

                                    <span className="MuiButton-startIcon MuiButton-iconSizeMedium mui-style-1l6c7y9">
                                    

                                    <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                        focusable="false"
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        data-testid="CheckIcon"
                                    >
                                        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                    </span>
                                    Saved
                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                </button>
                                </span>
                                <div className="MuiFormGroup-root mui-style-1h7anqn">
                                <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd mui-style-d5aniz">
                                    <span className="MuiSwitch-root MuiSwitch-sizeMedium mui-style-ecvcn9">
                                    <span className="MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary PrivateSwitchBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary mui-style-6qej9f">
                                        <input
                                        className="PrivateSwitchBase-input MuiSwitch-input mui-style-1m9pwf3"
                                        type="checkbox"
                                        />
                                        <span className="MuiSwitch-thumb mui-style-19gndve" />
                                        <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                    </span>
                                    <span className="MuiSwitch-track mui-style-1g7h0zb" />
                                    </span>
                                    <span className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label mui-style-12nz3ni">
                                    Show History
                                    </span>
                                </label>
                                </div>
                                <div>
                                <button
                                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium mui-style-1ox84q8"
                                    tabIndex={0}
                                    type="button"
                                    aria-label="more"
                                    id="long-button"
                                    aria-haspopup="true"
                                >
                                    <svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="MoreVertIcon"
                                    >
                                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                    </svg>
                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                </button>
                                </div>
                            </div>
                            </div>
                            <div className="MuiStack-root mui-style-j7qwjs">
                            <div
                                className="vel-grid mui-style-1j40hc9"
                                width="100%"
                                height="100%"
                                style={{
                                overflow: "hidden",
                                transition:
                                    "all 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
                                }}
                            >
                                <div
                                className="MuiBox-root mui-style-0"
                                style={{
                                    overflow: "auto",
                                    transition:
                                    "all 375ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
                                }}
                                >
                                <div className="MuiStack-root mui-style-j7qwjs">
                                    <div className="MuiBox-root mui-style-bpxntp">
                                    <div className="MuiTabs-root mui-style-orq8zk">
                                        <div
                                        className="MuiTabs-scroller MuiTabs-fixed mui-style-1anid1y"
                                        style={{
                                            overflow: "hidden",
                                            marginBottom: 0
                                        }}
                                        >
                                        <div
                                            className="MuiTabs-flexContainer mui-style-k008qs"
                                            role="tablist"
                                        >
                                            <button
                                            className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary Mui-selected mui-style-u5psfq"
                                            tabIndex={0}
                                            type="button"
                                            role="tab"
                                            aria-selected="true"
                                            >
                                            Comparison Mode
                                            <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                            </button>
                                            <button
                                            className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary mui-style-u5psfq"
                                            tabIndex={-1}
                                            type="button"
                                            role="tab"
                                            aria-selected="false"
                                            >
                                            Chat Mode
                                            <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                            </button>
                                        </div>
                                        <span
                                            className="MuiTabs-indicator mui-style-1s1nusq"
                                            style={{ left: 0, width: "153.945px" }}
                                        />
                                        </div>
                                    </div>
                                    </div>
                                    <div className="MuiStack-root mui-style-1k70n9i">
                                    <div className="MuiStack-root mui-style-ovnx7g">
                                        <div className="MuiStack-root mui-style-l5c1s3">
                                        <div className="MuiBox-root mui-style-19wtnec">
                                            <div className="MuiBox-root mui-style-8atqhb">
                                            <div
                                                className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered mui-style-c4sutr"
                                                style={{ minHeight: 0 }}
                                            >
                                                <div className="MuiCollapse-wrapper MuiCollapse-vertical mui-style-hboir5">
                                                <div className="MuiCollapse-wrapperInner MuiCollapse-vertical mui-style-8atqhb">
                                                    <div
                                                    className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiAlert-root MuiAlert-standardInfo MuiAlert-standard mui-style-1wgsl2q"
                                                    role="alert"
                                                    >
                                                    <div className="MuiAlert-icon mui-style-1l54tgj">
                                                        <svg
                                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit mui-style-1cw4hi4"
                                                        focusable="false"
                                                        aria-hidden="true"
                                                        viewBox="0 0 24 24"
                                                        data-testid="InfoOutlinedIcon"
                                                        >
                                                        <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="MuiAlert-message mui-style-1xsto0d">
                                                        <div className="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom MuiAlertTitle-root mui-style-13ch0ea">
                                                        Using Variables in Prompts
                                                        </div>
                                                        Prompt variables can be used to
                                                        create prompts that contain
                                                        dynamic content. You can define
                                                        variables in the top left, then
                                                        refer to them in your prompt
                                                        using "{"{"}
                                                        {"{"} variableName {"}"}
                                                        {"}"}" syntax.
                                                    </div>
                                                    <div className="MuiAlert-action mui-style-1mzcepu">
                                                        <button
                                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeSmall mui-style-14o8cxe"
                                                        tabIndex={0}
                                                        type="button"
                                                        >
                                                        <svg
                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit mui-style-1cw4hi4"
                                                            focusable="false"
                                                            aria-hidden="true"
                                                            viewBox="0 0 24 24"
                                                            data-testid="CloseIcon"
                                                        >
                                                            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                                        </svg>
                                                        <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                        </button>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="MuiTableContainer-root mui-style-kge0eu">
                                            <table className="MuiTable-root mui-style-1cmlibo">
                                            <thead className="MuiTableHead-root mui-style-1wbz3t9">
                                                <tr className="MuiTableRow-root MuiTableRow-head mui-style-6tvjh1">
                                                <th
                                                    className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium mui-style-1n16puf"
                                                    scope="col"
                                                >
                                                    <div className="MuiStack-root mui-style-2dfc1z">
                                                    <div className="MuiStack-root mui-style-ikzlcq">
                                                        <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiAccordion-root MuiAccordion-rounded Mui-expanded mui-style-4cgcqr">
                                                        <div
                                                            className="MuiButtonBase-root MuiAccordionSummary-root Mui-expanded mui-style-dnbxde"
                                                            tabIndex={0}
                                                            role="button"
                                                            aria-expanded="true"
                                                        >
                                                            <div className="MuiAccordionSummary-content Mui-expanded mui-style-1n11r91">
                                                            <p className="MuiTypography-root MuiTypography-body1 mui-style-12nz3ni">
                                                                <strong>
                                                                Prompt Variables (1)
                                                                </strong>
                                                            </p>
                                                            </div>
                                                            <div className="MuiAccordionSummary-expandIconWrapper Mui-expanded mui-style-1n3veo1">
                                                            <svg
                                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                focusable="false"
                                                                aria-hidden="true"
                                                                viewBox="0 0 24 24"
                                                                data-testid="ExpandMoreIcon"
                                                            >
                                                                <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                                                            </svg>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered mui-style-c4sutr"
                                                            style={{ minHeight: 0 }}
                                                        >
                                                            <div className="MuiCollapse-wrapper MuiCollapse-vertical mui-style-hboir5">
                                                            <div className="MuiCollapse-wrapperInner MuiCollapse-vertical mui-style-8atqhb">
                                                                <div
                                                                role="region"
                                                                className="MuiAccordion-region"
                                                                >
                                                                <div className="MuiAccordionDetails-root mui-style-u7qq7e">
                                                                    <div className="MuiStack-root mui-style-l5c1s3">
                                                                    <div className="MuiStack-root mui-style-60hgb7">
                                                                        <div className="MuiStack-root mui-style-4voims">
                                                                        <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root mui-style-feqhe6">
                                                                            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl mui-style-5d5a6q">
                                                                            <input
                                                                                aria-invalid="false"
                                                                                id=":rm:"
                                                                                type="text"
                                                                                className="MuiInputBase-input MuiOutlinedInput-input mui-style-wl6d4y"
                                                                                defaultValue="my_variable_name"
                                                                            />
                                                                            <fieldset
                                                                                aria-hidden="true"
                                                                                className="MuiOutlinedInput-notchedOutline mui-style-nqlg3w"
                                                                            >
                                                                                <legend className="mui-style-ihdtdm">
                                                                                <span className="notranslate">
                                                                                    ​
                                                                                </span>
                                                                                </legend>
                                                                            </fieldset>
                                                                            </div>
                                                                        </div>
                                                                        <div className="MuiBox-root mui-style-zoser8">
                                                                            <button
                                                                            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium mui-style-19rnnk9"
                                                                            tabIndex={
                                                                                0
                                                                            }
                                                                            type="button"
                                                                            >
                                                                            <svg
                                                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                                focusable="false"
                                                                                aria-hidden="true"
                                                                                viewBox="0 0 24 24"
                                                                                data-testid="DeleteIcon"
                                                                            >
                                                                                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                                                                            </svg>
                                                                            <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                            </button>
                                                                        </div>
                                                                        </div>
                                                                        <button
                                                                        className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation mui-style-vkm23l"
                                                                        tabIndex={0}
                                                                        type="button"
                                                                        >
                                                                        <span className="MuiButton-startIcon MuiButton-iconSizeMedium mui-style-1l6c7y9">
                                                                            <svg
                                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                            focusable="false"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                            data-testid="AddIcon"
                                                                            >
                                                                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                                                                            </svg>
                                                                        </span>
                                                                        Add Variable
                                                                        <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                        </button>
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth mui-style-1px5dlw" />
                                                        <div className="MuiBox-root mui-style-n085mf">
                                                        <div className="MuiStack-root mui-style-sakohh">
                                                            <div className="MuiFormGroup-root mui-style-1h7anqn">
                                                            <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd mui-style-d5aniz">
                                                                <span className="MuiSwitch-root MuiSwitch-sizeMedium mui-style-ecvcn9">
                                                                <span className="MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary PrivateSwitchBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary mui-style-6qej9f">
                                                                    <input
                                                                    className="PrivateSwitchBase-input MuiSwitch-input mui-style-1m9pwf3"
                                                                    type="checkbox"
                                                                    />
                                                                    <span className="MuiSwitch-thumb mui-style-19gndve" />
                                                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </span>
                                                                <span className="MuiSwitch-track mui-style-1g7h0zb" />
                                                                </span>
                                                                <span className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label mui-style-12nz3ni">
                                                                <div className="MuiStack-root mui-style-vb6e92">
                                                                    <p className="MuiTypography-root MuiTypography-body1 mui-style-12nz3ni">
                                                                    <strong>
                                                                        Evaluate Outputs
                                                                    </strong>
                                                                    </p>
                                                                    <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-1495v8q"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="InfoIcon"
                                                                    aria-label='Used to quantitatively compare each output to a target value. This adds a text input
                    called "Target" per test case where you can type in what you expect the output to be.'
                                                                    >
                                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                                                    </svg>
                                                                </div>
                                                                </span>
                                                            </label>
                                                            </div>
                                                        </div>
                                                        <div className="MuiStack-root mui-style-sakohh">
                                                            <div className="MuiFormGroup-root mui-style-1h7anqn">
                                                            <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd mui-style-d5aniz">
                                                                <span className="MuiSwitch-root MuiSwitch-sizeMedium mui-style-ecvcn9">
                                                                <span className="MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary PrivateSwitchBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary mui-style-6qej9f">
                                                                    <input
                                                                    className="PrivateSwitchBase-input MuiSwitch-input mui-style-1m9pwf3"
                                                                    type="checkbox"
                                                                    />
                                                                    <span className="MuiSwitch-thumb mui-style-19gndve" />
                                                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </span>
                                                                <span className="MuiSwitch-track mui-style-1g7h0zb" />
                                                                </span>
                                                                <span className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label mui-style-12nz3ni">
                                                                <div className="MuiStack-root mui-style-vb6e92">
                                                                    <p className="MuiTypography-root MuiTypography-body1 mui-style-12nz3ni">
                                                                    <strong>
                                                                        Track Latency
                                                                    </strong>
                                                                    </p>
                                                                    <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-1495v8q"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="InfoIcon"
                                                                    aria-label="Used to measure the latency of each prompt scenario. We measure both time to first token and time to last token."
                                                                    >
                                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                                                    </svg>
                                                                </div>
                                                                </span>
                                                            </label>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="MuiStack-root mui-style-vjh8k1">
                                                        <div className="MuiStack-root mui-style-vb6e92">
                                                        <span
                                                            aria-label="Run all prompts/scenarios."
                                                            className=""
                                                            style={{
                                                            width: "fit-content"
                                                            }}
                                                        >
                                                            <button
                                                            className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation mui-style-13ncbeb"
                                                            tabIndex={0}
                                                            type="button"
                                                            id="run-all-button"
                                                            >
                                                            Run All
                                                            <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                            </button>
                                                        </span>
                                                        <svg
                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-sr7fjs"
                                                            focusable="false"
                                                            aria-hidden="true"
                                                            viewBox="0 0 24 24"
                                                            data-testid="KeyboardIcon"
                                                            aria-label="Keyboard shortcut: ⌘ + ⇧ + A"
                                                        >
                                                            <path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z" />
                                                        </svg>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </th>
                                                <th
                                                    className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium mui-style-1qq9pke"
                                                    scope="col"
                                                >
                                                    <div
                                                    style={{
                                                        position: "relative",
                                                        userSelect: "auto",
                                                        width: 425,
                                                        height: "100%",
                                                        maxHeight: 400,
                                                        minWidth: 425,
                                                        minHeight: 250,
                                                        boxSizing: "border-box",
                                                        flexShrink: 0
                                                    }}
                                                    >
                                                    <div className="MuiStack-root mui-style-jz5t2k">
                                                        <div className="MuiStack-root mui-style-1g2wmx3">
                                                        <div className="MuiStack-root mui-style-60hgb7">
                                                            <div className="MuiStack-root mui-style-vb6e92">
                                                            <div className="editable-text mui-style-cgg9us">
                                                                <div className="MuiStack-root editable-text__view-mode mui-style-1ecka0k">
                                                                <p className="MuiTypography-root MuiTypography-body2 editable-text__view-mode__text mui-style-14bduoz">
                                                                    Prompt 1
                                                                </p>
                                                                <div className="vel-show-on-hover">
                                                                    <div
                                                                    className="MuiStack-root mui-style-j7qwjs"
                                                                    style={{
                                                                        opacity: 0,
                                                                        visibility:
                                                                        "hidden"
                                                                    }}
                                                                    >
                                                                    <button
                                                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-ndbnha"
                                                                        tabIndex={0}
                                                                        type="button"
                                                                    >
                                                                        <svg
                                                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-11ot9uz"
                                                                        focusable="false"
                                                                        aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="EditIcon"
                                                                        >
                                                                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                                                                        </svg>
                                                                        <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                    </button>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <div className="MuiStack-root mui-style-1hqsr3g">
                                                            <div className="MuiStack-root mui-style-y1t8bp">
                                                                <div className="MuiStack-root draggable-list mui-style-60hgb7">
                                                                <div
                                                                    className="draggable-list-item MuiBox-root mui-style-8atqhb"
                                                                    role="button"
                                                                    tabIndex={0}
                                                                    aria-disabled="false"
                                                                    aria-roledescription="sortable"
                                                                    aria-describedby="DndDescribedBy-0"
                                                                >
                                                                    <div className="MuiStack-root draggable-list-item-content mui-style-1u7fcbb">
                                                                    <div className="vel-show-on-hover">
                                                                        <div
                                                                        className="MuiStack-root mui-style-j7qwjs"
                                                                        style={{
                                                                            opacity: 0,
                                                                            visibility:
                                                                            "hidden"
                                                                        }}
                                                                        >
                                                                        <span className="MuiBox-root mui-style-1xso5jk">
                                                                            <svg
                                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                            focusable="false"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                            data-testid="DragIndicatorIcon"
                                                                            >
                                                                            <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                                                            </svg>
                                                                        </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="MuiStack-root mui-style-bumgyt">
                                                                        <div className="MuiInputBase-root MuiInput-root MuiInputBase-colorPrimary  mui-style-wu7h5g">
                                                                        <div
                                                                            tabIndex={0}
                                                                            role="button"
                                                                            aria-expanded="false"
                                                                            aria-haspopup="listbox"
                                                                            aria-labelledby="message-role-select-label"
                                                                            className="MuiSelect-select MuiSelect-standard MuiInputBase-input MuiInput-input mui-style-1vhoimv"
                                                                        >
                                                                            <div
                                                                            className="MuiChip-root MuiChip-filled MuiChip-sizeSmall MuiChip-colorPrimary MuiChip-filledPrimary mui-style-lp0xcc"
                                                                            aria-label="System message"
                                                                            >
                                                                            <span className="MuiChip-label MuiChip-labelSmall mui-style-1pjtbja">
                                                                                S
                                                                            </span>
                                                                            </div>
                                                                        </div>
                                                                        <input
                                                                            aria-invalid="false"
                                                                            aria-hidden="true"
                                                                            tabIndex={
                                                                            -1
                                                                            }
                                                                            className="MuiSelect-nativeInput mui-style-1k3x8v3"
                                                                            defaultValue="SYSTEM"
                                                                        />
                                                                        <svg
                                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconStandard mui-style-14iqd1v"
                                                                            focusable="false"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                            data-testid="ArrowDropDownIcon"
                                                                        >
                                                                            <path d="M7 10l5 5 5-5z" />
                                                                        </svg>
                                                                        </div>
                                                                        <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root mui-style-jbfqrv">
                                                                        <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-sizeSmall MuiInputBase-multiline mui-style-a61raa">
                                                                            <textarea
                                                                            aria-invalid="false"
                                                                            id=":rt:"
                                                                            className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMultiline MuiInputBase-inputSizeSmall mui-style-1p57gr9"
                                                                            style={{
                                                                                height: 40,
                                                                                overflow:
                                                                                "hidden"
                                                                            }}
                                                                            defaultValue={
                                                                                "What's your favorite {{ my_variable_name }}?"
                                                                            }
                                                                            />
                                                                            <textarea
                                                                            aria-hidden="true"
                                                                            className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMultiline MuiInputBase-inputSizeSmall mui-style-1p57gr9"
                                                                            readOnly=""
                                                                            tabIndex={
                                                                                -1
                                                                            }
                                                                            style={{
                                                                                visibility:
                                                                                "hidden",
                                                                                position:
                                                                                "absolute",
                                                                                overflow:
                                                                                "hidden",
                                                                                height: 0,
                                                                                top: 0,
                                                                                left: 0,
                                                                                transform:
                                                                                "translateZ(0px)",
                                                                                padding: 0,
                                                                                width:
                                                                                "240.992px"
                                                                            }}
                                                                            defaultValue={
                                                                                ""
                                                                            }
                                                                            />
                                                                            <fieldset
                                                                            aria-hidden="true"
                                                                            className="MuiOutlinedInput-notchedOutline mui-style-nqlg3w"
                                                                            >
                                                                            <legend className="mui-style-ihdtdm">
                                                                                <span className="notranslate">
                                                                                ​
                                                                                </span>
                                                                            </legend>
                                                                            </fieldset>
                                                                        </div>
                                                                        </div>
                                                                        <div className="vel-show-on-hover">
                                                                        <div
                                                                            className="MuiStack-root mui-style-j7qwjs"
                                                                            style={{
                                                                            opacity: 0,
                                                                            visibility:
                                                                                "hidden"
                                                                            }}
                                                                        >
                                                                            <div className="MuiStack-root mui-style-dvxtzn">
                                                                            <span
                                                                                aria-label="Cannot delete the last message"
                                                                                className=""
                                                                                style={{
                                                                                height:
                                                                                    "fit-content"
                                                                                }}
                                                                            >
                                                                                <button
                                                                                className="MuiButtonBase-root Mui-disabled MuiIconButton-root Mui-disabled MuiIconButton-sizeSmall mui-style-ndbnha"
                                                                                tabIndex={
                                                                                    -1
                                                                                }
                                                                                type="button"
                                                                                disabled=""
                                                                                aria-label="copy"
                                                                                >
                                                                                <svg
                                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                                    focusable="false"
                                                                                    aria-hidden="true"
                                                                                    viewBox="0 0 24 24"
                                                                                    data-testid="DeleteOutlineIcon"
                                                                                >
                                                                                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z" />
                                                                                </svg>
                                                                                </button>
                                                                            </span>
                                                                            </div>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    id="DndDescribedBy-0"
                                                                    style={{
                                                                    display: "none"
                                                                    }}
                                                                >
                                                                    To pick up a
                                                                    draggable item,
                                                                    press the space bar.
                                                                    While dragging, use
                                                                    the arrow keys to
                                                                    move the item. Press
                                                                    space again to drop
                                                                    the item in its new
                                                                    position, or press
                                                                    escape to cancel.
                                                                </div>
                                                                <div
                                                                    id="DndLiveRegion-0"
                                                                    role="status"
                                                                    aria-live="assertive"
                                                                    aria-atomic="true"
                                                                    style={{
                                                                    position: "fixed",
                                                                    width: 1,
                                                                    height: 1,
                                                                    margin: "-1px",
                                                                    border: 0,
                                                                    padding: 0,
                                                                    overflow:
                                                                        "hidden",
                                                                    clip:
                                                                        "rect(0px, 0px, 0px, 0px)",
                                                                    clipPath:
                                                                        "inset(100%)",
                                                                    whiteSpace:
                                                                        "nowrap"
                                                                    }}
                                                                />
                                                                </div>
                                                                <div className="MuiStack-root mui-style-2w5qlz">
                                                                <button
                                                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-disableElevation mui-style-majb5"
                                                                    tabIndex={0}
                                                                    type="button"
                                                                >
                                                                    <span className="MuiButton-startIcon MuiButton-iconSizeSmall mui-style-16rzsu1">
                                                                    <svg
                                                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                        focusable="false"
                                                                        aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="AddIcon"
                                                                    >
                                                                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                                                                    </svg>
                                                                    </span>
                                                                    Add Message
                                                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                                <button
                                                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-disableElevation mui-style-majb5"
                                                                    tabIndex={0}
                                                                    type="button"
                                                                >
                                                                    <span className="MuiButton-startIcon MuiButton-iconSizeSmall mui-style-16rzsu1">
                                                                    <svg
                                                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                        focusable="false"
                                                                        aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="AddIcon"
                                                                    >
                                                                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                                                                    </svg>
                                                                    </span>
                                                                    Add Chat History
                                                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                                <button
                                                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-disableElevation mui-style-majb5"
                                                                    tabIndex={0}
                                                                    type="button"
                                                                >
                                                                    <span className="MuiButton-startIcon MuiButton-iconSizeSmall mui-style-16rzsu1">
                                                                    <svg
                                                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                        focusable="false"
                                                                        aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="AddIcon"
                                                                    >
                                                                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                                                                    </svg>
                                                                    </span>
                                                                    Add Function
                                                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className="MuiStack-root mui-style-dvxtzn">
                                                            <button
                                                            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium mui-style-1ox84q8"
                                                            tabIndex={0}
                                                            type="button"
                                                            aria-label="Open in full screen"
                                                            >
                                                            <svg
                                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                focusable="false"
                                                                aria-hidden="true"
                                                                viewBox="0 0 24 24"
                                                                data-testid="OpenInFullIcon"
                                                            >
                                                                <path d="M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10z" />
                                                            </svg>
                                                            <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                            </button>
                                                            <div>
                                                            <button
                                                                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium mui-style-1ox84q8"
                                                                tabIndex={0}
                                                                type="button"
                                                                aria-label="more"
                                                                id="long-button"
                                                                aria-haspopup="true"
                                                            >
                                                                <svg
                                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                focusable="false"
                                                                aria-hidden="true"
                                                                viewBox="0 0 24 24"
                                                                data-testid="MoreVertIcon"
                                                                >
                                                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                                                </svg>
                                                                <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                            </button>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div className="MuiStack-root mui-style-ikzlcq">
                                                        <div className="MuiStack-root mui-style-15ch9ys">
                                                            <span
                                                            aria-label="By deploying this prompt, you can use Vellum's API to make completion requests against and get model/prompt versioning and monitoring."
                                                            className=""
                                                            >
                                                            <button
                                                                className="MuiButtonBase-root MuiButton-root MuiLoadingButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-disableElevation MuiButton-root MuiLoadingButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-disableElevation mui-style-1k561d7"
                                                                tabIndex={0}
                                                                type="button"
                                                                id="deploy-prompt-button-0"
                                                            >
                                                                <span className="MuiButton-startIcon MuiButton-iconSizeSmall mui-style-16rzsu1">
                                                                <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="PlayArrowIcon"
                                                                >
                                                                    <path d="M8 5v14l11-7z" />
                                                                </svg>
                                                                </span>
                                                                Deploy
                                                                <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                            </button>
                                                            </span>
                                                            <div
                                                            className="MuiButtonBase-root MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-clickable MuiChip-clickableColorDefault MuiChip-filledDefault mui-style-1dvx7ni"
                                                            tabIndex={0}
                                                            role="button"
                                                            aria-label="Configure this prompt's underlying model. Currently using gpt-3.5-turbo"
                                                            >
                                                            <span className="MuiChip-label MuiChip-labelMedium mui-style-9iedg7">
                                                                <p className="MuiTypography-root MuiTypography-body2 MuiTypography-noWrap mui-style-wxd9sg">
                                                                gpt-3.5-turbo
                                                                </p>
                                                            </span>
                                                            <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                            </div>
                                                            <button
                                                            className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textNeutral MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-disableElevation MuiButton-root MuiButton-text MuiButton-textNeutral MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-disableElevation mui-style-19um6f"
                                                            tabIndex={0}
                                                            type="button"
                                                            id="prompt-parameters-button-0"
                                                            aria-label="Configure this prompt's underlying model, temperature, and more."
                                                            >
                                                            <span className="MuiButton-startIcon MuiButton-iconSizeSmall mui-style-16rzsu1">
                                                                <svg
                                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                focusable="false"
                                                                aria-hidden="true"
                                                                viewBox="0 0 24 24"
                                                                data-testid="SettingsIcon"
                                                                >
                                                                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                                                                </svg>
                                                            </span>
                                                            Parameters
                                                            <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                            </button>
                                                            <div className="vel-show-on-hover">
                                                            <div
                                                                className="MuiStack-root mui-style-j7qwjs"
                                                                style={{
                                                                opacity: 0,
                                                                visibility: "hidden"
                                                                }}
                                                            >
                                                                <div>
                                                                <span
                                                                    aria-label="Re-run just this column"
                                                                    className=""
                                                                >
                                                                    <button
                                                                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-qbvwrb"
                                                                    tabIndex={0}
                                                                    type="button"
                                                                    >
                                                                    <svg
                                                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                        focusable="false"
                                                                        aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="RefreshIcon"
                                                                    >
                                                                        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
                                                                    </svg>
                                                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                    </button>
                                                                </span>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth mui-style-1px5dlw" />
                                                        <div className="MuiStack-root mui-style-l5c1s3" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                        className=""
                                                        style={{
                                                            position: "absolute",
                                                            userSelect: "none",
                                                            width: "100%",
                                                            height: 10,
                                                            top: "-5px",
                                                            left: 0,
                                                            cursor: "row-resize"
                                                        }}
                                                        />
                                                        <div
                                                        className=""
                                                        style={{
                                                            position: "absolute",
                                                            userSelect: "none",
                                                            width: 10,
                                                            height: "100%",
                                                            top: 0,
                                                            cursor: "col-resize",
                                                            right: "-5px"
                                                        }}
                                                        >
                                                        <div
                                                            style={{
                                                            display: "flex",
                                                            flexFlow: "column",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                            flex: "0 1 auto",
                                                            width: 8,
                                                            height: 40,
                                                            position: "absolute",
                                                            right: 4,
                                                            top: "50%",
                                                            transform:
                                                                "translateY(-50%)",
                                                            cursor: "col-resize"
                                                            }}
                                                        >
                                                            <div
                                                            style={{
                                                                opacity: 1,
                                                                width: 4,
                                                                height: "100%",
                                                                backgroundColor:
                                                                "rgb(194, 194, 194)",
                                                                borderRadius: 4,
                                                                transition:
                                                                "opacity 0ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
                                                            }}
                                                            />
                                                        </div>
                                                        </div>
                                                        <div
                                                        className=""
                                                        style={{
                                                            position: "absolute",
                                                            userSelect: "none",
                                                            width: "100%",
                                                            height: 10,
                                                            left: 0,
                                                            cursor: "row-resize",
                                                            bottom: "-5px"
                                                        }}
                                                        />
                                                        <div
                                                        className=""
                                                        style={{
                                                            position: "absolute",
                                                            userSelect: "none",
                                                            width: 10,
                                                            height: "100%",
                                                            top: 0,
                                                            left: "-5px",
                                                            cursor: "col-resize"
                                                        }}
                                                        />
                                                        <div
                                                        className=""
                                                        style={{
                                                            position: "absolute",
                                                            userSelect: "none",
                                                            width: 20,
                                                            height: 20,
                                                            right: "-10px",
                                                            top: "-10px",
                                                            cursor: "ne-resize"
                                                        }}
                                                        />
                                                        <div
                                                        className=""
                                                        style={{
                                                            position: "absolute",
                                                            userSelect: "none",
                                                            width: 20,
                                                            height: 20,
                                                            right: "-10px",
                                                            bottom: "-10px",
                                                            cursor: "se-resize"
                                                        }}
                                                        />
                                                        <div
                                                        className=""
                                                        style={{
                                                            position: "absolute",
                                                            userSelect: "none",
                                                            width: 20,
                                                            height: 20,
                                                            left: "-10px",
                                                            bottom: "-10px",
                                                            cursor: "sw-resize"
                                                        }}
                                                        />
                                                        <div
                                                        className=""
                                                        style={{
                                                            position: "absolute",
                                                            userSelect: "none",
                                                            width: 20,
                                                            height: 20,
                                                            left: "-10px",
                                                            top: "-10px",
                                                            cursor: "nw-resize"
                                                        }}
                                                        />
                                                    </div>
                                                    </div>
                                                </th>
                                                <th
                                                    className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium mui-style-1xg9va"
                                                    scope="col"
                                                >
                                                    <div className="MuiStack-root mui-style-1t62lt9">
                                                    <button
                                                        className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation mui-style-rjqp4x"
                                                        tabIndex={0}
                                                        type="button"
                                                    >
                                                        <span className="MuiButton-startIcon MuiButton-iconSizeMedium mui-style-1l6c7y9">
                                                        <svg
                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                            focusable="false"
                                                            aria-hidden="true"
                                                            viewBox="0 0 24 24"
                                                            data-testid="AddIcon"
                                                        >
                                                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                                                        </svg>
                                                        </span>
                                                        Add Prompt
                                                        <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                    </button>
                                                    <div className="MuiStack-root mui-style-l5c1s3">
                                                        <button
                                                        className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textNeutral MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation MuiButton-root MuiButton-text MuiButton-textNeutral MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation mui-style-10le68z"
                                                        tabIndex={0}
                                                        type="button"
                                                        >
                                                        <span className="MuiButton-startIcon MuiButton-iconSizeMedium mui-style-1l6c7y9">
                                                            <svg
                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                            focusable="false"
                                                            aria-hidden="true"
                                                            viewBox="0 0 24 24"
                                                            data-testid="ViewWeekIcon"
                                                            >
                                                            <path d="M5.33 20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1.33c1.1 0 2 .9 2 2v12c0 1.1-.89 2-2 2zM22 18V6c0-1.1-.9-2-2-2h-1.33c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2H20c1.11 0 2-.9 2-2zm-7.33 0V6c0-1.1-.9-2-2-2h-1.33c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h1.33c1.1 0 2-.9 2-2z" />
                                                            </svg>
                                                        </span>
                                                        <p className="MuiTypography-root MuiTypography-body1 mui-style-12nz3ni">
                                                            Manage prompts
                                                        </p>
                                                        <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                        </button>
                                                    </div>
                                                    </div>
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody className="MuiTableBody-root mui-style-1xnox0e">
                                                <tr className="MuiTableRow-root mui-style-6tvjh1">
                                                <th
                                                    className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium mui-style-13tuca0"
                                                    scope="row"
                                                >
                                                    <div className="MuiStack-root mui-style-ikzlcq">
                                                    <div
                                                        className="MuiStack-root mui-style-95g4uk"
                                                        id="input-set-0"
                                                    >
                                                        <div className="editable-text mui-style-cgg9us">
                                                        <div className="MuiStack-root editable-text__view-mode mui-style-1ecka0k">
                                                            <p className="MuiTypography-root MuiTypography-body2 editable-text__view-mode__text mui-style-14bduoz">
                                                            Scenario 1
                                                            </p>
                                                            <div className="vel-show-on-hover">
                                                            <div
                                                                className="MuiStack-root mui-style-j7qwjs"
                                                                style={{
                                                                opacity: 0,
                                                                visibility: "hidden"
                                                                }}
                                                            >
                                                                <button
                                                                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-ndbnha"
                                                                tabIndex={0}
                                                                type="button"
                                                                >
                                                                <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-11ot9uz"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="EditIcon"
                                                                >
                                                                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                                                                </svg>
                                                                <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div className="vel-show-on-hover">
                                                        <div
                                                            className="MuiStack-root mui-style-j7qwjs"
                                                            style={{
                                                            opacity: 0,
                                                            visibility: "hidden"
                                                            }}
                                                        >
                                                            <div className="MuiStack-root mui-style-9e6j7t">
                                                            <div>
                                                                <span
                                                                aria-label="Re-run just this row"
                                                                className=""
                                                                >
                                                                <button
                                                                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-qbvwrb"
                                                                    tabIndex={0}
                                                                    type="button"
                                                                >
                                                                    <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="RefreshIcon"
                                                                    >
                                                                    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
                                                                    </svg>
                                                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <button
                                                                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-ndbnha"
                                                                tabIndex={0}
                                                                type="button"
                                                                aria-label="more"
                                                                id="long-button"
                                                                aria-haspopup="true"
                                                                >
                                                                <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="MoreVertIcon"
                                                                >
                                                                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                                                </svg>
                                                                <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="MuiStack-root mui-style-ikzlcq">
                                                        <div className="MuiStack-root mui-style-8ekfkf">
                                                        <div
                                                            style={{
                                                            position: "relative",
                                                            userSelect: "auto",
                                                            width: 352,
                                                            height: 84,
                                                            minWidth: 400,
                                                            minHeight: 56,
                                                            boxSizing: "border-box",
                                                            flexShrink: 0
                                                            }}
                                                        >
                                                            <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root mui-style-n0z9bj">
                                                            <label
                                                                className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-colorPrimary MuiFormLabel-filled MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined mui-style-199dhxh"
                                                                data-shrink="true"
                                                                htmlFor=":r1c:"
                                                                id=":r1c:-label"
                                                            >
                                                                my_variable_name
                                                            </label>
                                                            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-multiline mui-style-tbhdvy">
                                                                <textarea
                                                                aria-invalid="false"
                                                                id=":r1c:"
                                                                className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMultiline mui-style-1kgpj1t"
                                                                style={{
                                                                    height: 84,
                                                                    overflow: "hidden"
                                                                }}
                                                                defaultValue={"color"}
                                                                />
                                                                <textarea
                                                                aria-hidden="true"
                                                                className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMultiline mui-style-1kgpj1t"
                                                                readOnly=""
                                                                tabIndex={-1}
                                                                style={{
                                                                    visibility:
                                                                    "hidden",
                                                                    position:
                                                                    "absolute",
                                                                    overflow: "hidden",
                                                                    height: 0,
                                                                    top: 0,
                                                                    left: 0,
                                                                    transform:
                                                                    "translateZ(0px)",
                                                                    padding: 0,
                                                                    width: 372
                                                                }}
                                                                defaultValue={""}
                                                                />
                                                                <fieldset
                                                                aria-hidden="true"
                                                                className="MuiOutlinedInput-notchedOutline mui-style-nqlg3w"
                                                                >
                                                                <legend className="mui-style-14lo706">
                                                                    <span>
                                                                    my_variable_name
                                                                    </span>
                                                                </legend>
                                                                </fieldset>
                                                            </div>
                                                            </div>
                                                            <div>
                                                            <div
                                                                className=""
                                                                style={{
                                                                position: "absolute",
                                                                userSelect: "none",
                                                                width: "100%",
                                                                height: 10,
                                                                top: "-5px",
                                                                left: 0,
                                                                cursor: "row-resize"
                                                                }}
                                                            />
                                                            <div
                                                                className=""
                                                                style={{
                                                                position: "absolute",
                                                                userSelect: "none",
                                                                width: 10,
                                                                height: "100%",
                                                                top: 0,
                                                                cursor: "col-resize",
                                                                right: "-5px"
                                                                }}
                                                            />
                                                            <div
                                                                className=""
                                                                style={{
                                                                position: "absolute",
                                                                userSelect: "none",
                                                                width: "100%",
                                                                height: 10,
                                                                left: 0,
                                                                cursor: "row-resize",
                                                                bottom: "-5px"
                                                                }}
                                                            />
                                                            <div
                                                                className=""
                                                                style={{
                                                                position: "absolute",
                                                                userSelect: "none",
                                                                width: 10,
                                                                height: "100%",
                                                                top: 0,
                                                                left: "-5px",
                                                                cursor: "col-resize"
                                                                }}
                                                            />
                                                            <div
                                                                className=""
                                                                style={{
                                                                position: "absolute",
                                                                userSelect: "none",
                                                                width: 20,
                                                                height: 20,
                                                                right: "-10px",
                                                                top: "-10px",
                                                                cursor: "ne-resize"
                                                                }}
                                                            />
                                                            <div
                                                                className=""
                                                                style={{
                                                                position: "absolute",
                                                                userSelect: "none",
                                                                width: 20,
                                                                height: 20,
                                                                right: "-10px",
                                                                bottom: "-10px",
                                                                cursor: "se-resize"
                                                                }}
                                                            >
                                                                <div
                                                                className="vel-resize-handle"
                                                                style={{
                                                                    transform:
                                                                    "translate(-6px, -6px)"
                                                                }}
                                                                >
                                                                <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall mui-style-1xu4812"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="ExpandMoreRoundedIcon"
                                                                >
                                                                    <path d="M15.88 9.29 12 13.17 8.12 9.29a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z" />
                                                                </svg>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className=""
                                                                style={{
                                                                position: "absolute",
                                                                userSelect: "none",
                                                                width: 20,
                                                                height: 20,
                                                                left: "-10px",
                                                                bottom: "-10px",
                                                                cursor: "sw-resize"
                                                                }}
                                                            />
                                                            <div
                                                                className=""
                                                                style={{
                                                                position: "absolute",
                                                                userSelect: "none",
                                                                width: 20,
                                                                height: 20,
                                                                left: "-10px",
                                                                top: "-10px",
                                                                cursor: "nw-resize"
                                                                }}
                                                            />
                                                            </div>
                                                        </div>
                                                        <div className="vel-show-on-hover">
                                                            <div
                                                            className="MuiStack-root mui-style-j7qwjs"
                                                            style={{
                                                                opacity: 0,
                                                                visibility: "hidden"
                                                            }}
                                                            >
                                                            <div className="MuiStack-root mui-style-j7qwjs">
                                                                <span
                                                                aria-label="Copy to all scenarios"
                                                                className=""
                                                                >
                                                                <button
                                                                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-ndbnha"
                                                                    tabIndex={0}
                                                                    type="button"
                                                                    aria-label="copy"
                                                                >
                                                                    <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-arlcxm"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="SyncAltIcon"
                                                                    >
                                                                    <path d="m18 12 4-4-4-4v3H3v2h15zM6 12l-4 4 4 4v-3h15v-2H6z" />
                                                                    </svg>
                                                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                                </span>
                                                                <button
                                                                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-qbvwrb"
                                                                tabIndex={0}
                                                                type="button"
                                                                aria-label="Use the results of a document search"
                                                                >
                                                                <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="SearchIcon"
                                                                >
                                                                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                                                </svg>
                                                                <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </th>
                                                <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium mui-style-bohbfj">
                                                    <div className="MuiBox-root mui-style-ou2u7">
                                                    <div className="vel-show-on-hover">
                                                        <div
                                                        className="MuiStack-root mui-style-j7qwjs"
                                                        style={{
                                                            opacity: 0,
                                                            visibility: "hidden"
                                                        }}
                                                        >
                                                        <div className="MuiStack-root mui-style-18atq89">
                                                            <div>
                                                            <div className="MuiStack-root mui-style-vb6e92">
                                                                <div className="MuiStack-root mui-style-vb6e92">
                                                                <button
                                                                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-ndbnha"
                                                                    tabIndex={0}
                                                                    type="button"
                                                                    aria-label="Manually indicate that this output was good"
                                                                >
                                                                    <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="ThumbUpOffAltIcon"
                                                                    >
                                                                    <path d="m13.11 5.72-.57 2.89c-.12.59.04 1.2.42 1.66.38.46.94.73 1.54.73H20v1.08L17.43 18H9.34c-.18 0-.34-.16-.34-.34V9.82l4.11-4.1M14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.83C7 18.95 8.05 20 9.34 20h8.1c.71 0 1.36-.37 1.72-.97l2.67-6.15c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2zM4 9H2v11h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1z" />
                                                                    </svg>
                                                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                                <button
                                                                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-ndbnha"
                                                                    tabIndex={0}
                                                                    type="button"
                                                                    aria-label="Manually indicate that this output was bad"
                                                                >
                                                                    <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="ThumbDownOffAltIcon"
                                                                    >
                                                                    <path d="m10.89 18.28.57-2.89c.12-.59-.04-1.2-.42-1.66-.38-.46-.94-.73-1.54-.73H4v-1.08L6.57 6h8.09c.18 0 .34.16.34.34v7.84l-4.11 4.1M10 22l6.41-6.41c.38-.38.59-.89.59-1.42V6.34C17 5.05 15.95 4 14.66 4h-8.1c-.71 0-1.36.37-1.72.97l-2.67 6.15c-.11.25-.17.52-.17.8V13c0 1.1.9 2 2 2h5.5l-.92 4.65c-.05.22-.02.46.08.66.23.45.52.86.88 1.22L10 22zm10-7h2V4h-2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1z" />
                                                                    </svg>
                                                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                                </div>
                                                                <div>
                                                                <button
                                                                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium mui-style-1ox84q8"
                                                                    tabIndex={0}
                                                                    type="button"
                                                                    aria-label="Leave free-text notes related to this output"
                                                                >
                                                                    <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="TextSnippetOutlinedIcon"
                                                                    >
                                                                    <path d="M14.17 5 19 9.83V19H5V5h9.17m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59zM7 15h10v2H7v-2zm0-4h10v2H7v-2zm0-4h7v2H7V7z" />
                                                                    </svg>
                                                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <div className="MuiStack-root mui-style-vb6e92">
                                                            <div className="MuiStack-root mui-style-1lhy0r8">
                                                                <span
                                                                aria-label="Clear result"
                                                                className=""
                                                                >
                                                                <button
                                                                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-ndbnha"
                                                                    tabIndex={0}
                                                                    type="button"
                                                                    aria-label="clear result"
                                                                >
                                                                    <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="ClearIcon"
                                                                    >
                                                                    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                                                    </svg>
                                                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                                </span>
                                                                <span
                                                                aria-label="Preview compiled prompt"
                                                                className=""
                                                                >
                                                                <button
                                                                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-ndbnha"
                                                                    tabIndex={0}
                                                                    type="button"
                                                                    aria-label="preview compiled prompt"
                                                                >
                                                                    <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="VisibilityIcon"
                                                                    >
                                                                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                                                                    </svg>
                                                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                                </span>
                                                                <span
                                                                aria-label="Copy result"
                                                                className=""
                                                                >
                                                                <button
                                                                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-ndbnha"
                                                                    tabIndex={0}
                                                                    type="button"
                                                                    aria-label="copy result"
                                                                >
                                                                    <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="ContentCopyIcon"
                                                                    >
                                                                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                                                                    </svg>
                                                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                                </span>
                                                                <button
                                                                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-qbvwrb"
                                                                tabIndex={0}
                                                                type="button"
                                                                aria-label="Run just this prompt against just this scenario"
                                                                >
                                                                <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="RefreshIcon"
                                                                >
                                                                    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
                                                                </svg>
                                                                <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="MuiStack-root mui-style-wpjm6p">
                                                    <div className="MuiStack-root mui-style-13epfed">
                                                        <p className="MuiTypography-root MuiTypography-body1 mui-style-k2x20f" />
                                                        <p className="MuiTypography-root MuiTypography-body1 mui-style-k2x20f" />
                                                        <p className="MuiTypography-root MuiTypography-body1 mui-style-k2x20f">
                                                        My favorite color is blue.
                                                        </p>
                                                    </div>
                                                    <div className="MuiBox-root mui-style-1fuqp3k" />
                                                    <div className="MuiBox-root mui-style-1fuqp3k" />
                                                    </div>
                                                </td>
                                                </tr>
                                                <tr className="MuiTableRow-root mui-style-6tvjh1">
                                                <th
                                                    className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium mui-style-13tuca0"
                                                    scope="row"
                                                >
                                                    <div className="MuiStack-root mui-style-ikzlcq">
                                                    <div
                                                        className="MuiStack-root mui-style-95g4uk"
                                                        id="input-set-1"
                                                    >
                                                        <div className="editable-text mui-style-cgg9us">
                                                        <div className="MuiStack-root editable-text__view-mode mui-style-1ecka0k">
                                                            <p className="MuiTypography-root MuiTypography-body2 editable-text__view-mode__text mui-style-14bduoz">
                                                            Scenario 2
                                                            </p>
                                                            <div className="vel-show-on-hover">
                                                            <div
                                                                className="MuiStack-root mui-style-j7qwjs"
                                                                style={{
                                                                opacity: 0,
                                                                visibility: "hidden"
                                                                }}
                                                            >
                                                                <button
                                                                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-ndbnha"
                                                                tabIndex={0}
                                                                type="button"
                                                                >
                                                                <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-11ot9uz"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="EditIcon"
                                                                >
                                                                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                                                                </svg>
                                                                <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div className="vel-show-on-hover">
                                                        <div
                                                            className="MuiStack-root mui-style-j7qwjs"
                                                            style={{
                                                            opacity: 0,
                                                            visibility: "hidden"
                                                            }}
                                                        >
                                                            <div className="MuiStack-root mui-style-9e6j7t">
                                                            <div>
                                                                <span
                                                                aria-label="Re-run just this row"
                                                                className=""
                                                                >
                                                                <button
                                                                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-qbvwrb"
                                                                    tabIndex={0}
                                                                    type="button"
                                                                >
                                                                    <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="RefreshIcon"
                                                                    >
                                                                    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
                                                                    </svg>
                                                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <button
                                                                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-ndbnha"
                                                                tabIndex={0}
                                                                type="button"
                                                                aria-label="more"
                                                                id="long-button"
                                                                aria-haspopup="true"
                                                                >
                                                                <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="MoreVertIcon"
                                                                >
                                                                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                                                </svg>
                                                                <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="MuiStack-root mui-style-ikzlcq">
                                                        <div className="MuiStack-root mui-style-8ekfkf">
                                                        <div
                                                            style={{
                                                            position: "relative",
                                                            userSelect: "auto",
                                                            width: 352,
                                                            height: 84,
                                                            minWidth: 400,
                                                            minHeight: 56,
                                                            boxSizing: "border-box",
                                                            flexShrink: 0
                                                            }}
                                                        >
                                                            <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root mui-style-n0z9bj">
                                                            <label
                                                                className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-colorPrimary MuiFormLabel-filled MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined mui-style-199dhxh"
                                                                data-shrink="true"
                                                                htmlFor=":r1q:"
                                                                id=":r1q:-label"
                                                            >
                                                                my_variable_name
                                                            </label>
                                                            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-multiline mui-style-tbhdvy">
                                                                <textarea
                                                                aria-invalid="false"
                                                                id=":r1q:"
                                                                className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMultiline mui-style-1kgpj1t"
                                                                style={{
                                                                    height: 84,
                                                                    overflow: "hidden"
                                                                }}
                                                                defaultValue={
                                                                    "animal"
                                                                }
                                                                />
                                                                <textarea
                                                                aria-hidden="true"
                                                                className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMultiline mui-style-1kgpj1t"
                                                                readOnly=""
                                                                tabIndex={-1}
                                                                style={{
                                                                    visibility:
                                                                    "hidden",
                                                                    position:
                                                                    "absolute",
                                                                    overflow: "hidden",
                                                                    height: 0,
                                                                    top: 0,
                                                                    left: 0,
                                                                    transform:
                                                                    "translateZ(0px)",
                                                                    padding: 0,
                                                                    width: 372
                                                                }}
                                                                defaultValue={""}
                                                                />
                                                                <fieldset
                                                                aria-hidden="true"
                                                                className="MuiOutlinedInput-notchedOutline mui-style-nqlg3w"
                                                                >
                                                                <legend className="mui-style-14lo706">
                                                                    <span>
                                                                    my_variable_name
                                                                    </span>
                                                                </legend>
                                                                </fieldset>
                                                            </div>
                                                            </div>
                                                            <div>
                                                            <div
                                                                className=""
                                                                style={{
                                                                position: "absolute",
                                                                userSelect: "none",
                                                                width: "100%",
                                                                height: 10,
                                                                top: "-5px",
                                                                left: 0,
                                                                cursor: "row-resize"
                                                                }}
                                                            />
                                                            <div
                                                                className=""
                                                                style={{
                                                                position: "absolute",
                                                                userSelect: "none",
                                                                width: 10,
                                                                height: "100%",
                                                                top: 0,
                                                                cursor: "col-resize",
                                                                right: "-5px"
                                                                }}
                                                            />
                                                            <div
                                                                className=""
                                                                style={{
                                                                position: "absolute",
                                                                userSelect: "none",
                                                                width: "100%",
                                                                height: 10,
                                                                left: 0,
                                                                cursor: "row-resize",
                                                                bottom: "-5px"
                                                                }}
                                                            />
                                                            <div
                                                                className=""
                                                                style={{
                                                                position: "absolute",
                                                                userSelect: "none",
                                                                width: 10,
                                                                height: "100%",
                                                                top: 0,
                                                                left: "-5px",
                                                                cursor: "col-resize"
                                                                }}
                                                            />
                                                            <div
                                                                className=""
                                                                style={{
                                                                position: "absolute",
                                                                userSelect: "none",
                                                                width: 20,
                                                                height: 20,
                                                                right: "-10px",
                                                                top: "-10px",
                                                                cursor: "ne-resize"
                                                                }}
                                                            />
                                                            <div
                                                                className=""
                                                                style={{
                                                                position: "absolute",
                                                                userSelect: "none",
                                                                width: 20,
                                                                height: 20,
                                                                right: "-10px",
                                                                bottom: "-10px",
                                                                cursor: "se-resize"
                                                                }}
                                                            >
                                                                <div
                                                                className="vel-resize-handle"
                                                                style={{
                                                                    transform:
                                                                    "translate(-6px, -6px)"
                                                                }}
                                                                >
                                                                <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall mui-style-1xu4812"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="ExpandMoreRoundedIcon"
                                                                >
                                                                    <path d="M15.88 9.29 12 13.17 8.12 9.29a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z" />
                                                                </svg>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className=""
                                                                style={{
                                                                position: "absolute",
                                                                userSelect: "none",
                                                                width: 20,
                                                                height: 20,
                                                                left: "-10px",
                                                                bottom: "-10px",
                                                                cursor: "sw-resize"
                                                                }}
                                                            />
                                                            <div
                                                                className=""
                                                                style={{
                                                                position: "absolute",
                                                                userSelect: "none",
                                                                width: 20,
                                                                height: 20,
                                                                left: "-10px",
                                                                top: "-10px",
                                                                cursor: "nw-resize"
                                                                }}
                                                            />
                                                            </div>
                                                        </div>
                                                        <div className="vel-show-on-hover">
                                                            <div
                                                            className="MuiStack-root mui-style-j7qwjs"
                                                            style={{
                                                                opacity: 0,
                                                                visibility: "hidden"
                                                            }}
                                                            >
                                                            <div className="MuiStack-root mui-style-j7qwjs">
                                                                <span
                                                                aria-label="Copy to all scenarios"
                                                                className=""
                                                                >
                                                                <button
                                                                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-ndbnha"
                                                                    tabIndex={0}
                                                                    type="button"
                                                                    aria-label="copy"
                                                                >
                                                                    <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-arlcxm"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="SyncAltIcon"
                                                                    >
                                                                    <path d="m18 12 4-4-4-4v3H3v2h15zM6 12l-4 4 4 4v-3h15v-2H6z" />
                                                                    </svg>
                                                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                                </span>
                                                                <button
                                                                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-qbvwrb"
                                                                tabIndex={0}
                                                                type="button"
                                                                aria-label="Use the results of a document search"
                                                                >
                                                                <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="SearchIcon"
                                                                >
                                                                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                                                </svg>
                                                                <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </th>
                                                <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium mui-style-bohbfj">
                                                    <div className="MuiBox-root mui-style-ou2u7">
                                                    <div className="vel-show-on-hover">
                                                        <div
                                                        className="MuiStack-root mui-style-j7qwjs"
                                                        style={{
                                                            opacity: 0,
                                                            visibility: "hidden"
                                                        }}
                                                        >
                                                        <div className="MuiStack-root mui-style-18atq89">
                                                            <div>
                                                            <div className="MuiStack-root mui-style-vb6e92">
                                                                <div className="MuiStack-root mui-style-vb6e92">
                                                                <button
                                                                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-ndbnha"
                                                                    tabIndex={0}
                                                                    type="button"
                                                                    aria-label="Manually indicate that this output was good"
                                                                >
                                                                    <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="ThumbUpOffAltIcon"
                                                                    >
                                                                    <path d="m13.11 5.72-.57 2.89c-.12.59.04 1.2.42 1.66.38.46.94.73 1.54.73H20v1.08L17.43 18H9.34c-.18 0-.34-.16-.34-.34V9.82l4.11-4.1M14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.83C7 18.95 8.05 20 9.34 20h8.1c.71 0 1.36-.37 1.72-.97l2.67-6.15c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2zM4 9H2v11h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1z" />
                                                                    </svg>
                                                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                                <button
                                                                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-ndbnha"
                                                                    tabIndex={0}
                                                                    type="button"
                                                                    aria-label="Manually indicate that this output was bad"
                                                                >
                                                                    <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="ThumbDownOffAltIcon"
                                                                    >
                                                                    <path d="m10.89 18.28.57-2.89c.12-.59-.04-1.2-.42-1.66-.38-.46-.94-.73-1.54-.73H4v-1.08L6.57 6h8.09c.18 0 .34.16.34.34v7.84l-4.11 4.1M10 22l6.41-6.41c.38-.38.59-.89.59-1.42V6.34C17 5.05 15.95 4 14.66 4h-8.1c-.71 0-1.36.37-1.72.97l-2.67 6.15c-.11.25-.17.52-.17.8V13c0 1.1.9 2 2 2h5.5l-.92 4.65c-.05.22-.02.46.08.66.23.45.52.86.88 1.22L10 22zm10-7h2V4h-2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1z" />
                                                                    </svg>
                                                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                                </div>
                                                                <div>
                                                                <button
                                                                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium mui-style-1ox84q8"
                                                                    tabIndex={0}
                                                                    type="button"
                                                                    aria-label="Leave free-text notes related to this output"
                                                                >
                                                                    <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="TextSnippetOutlinedIcon"
                                                                    >
                                                                    <path d="M14.17 5 19 9.83V19H5V5h9.17m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59zM7 15h10v2H7v-2zm0-4h10v2H7v-2zm0-4h7v2H7V7z" />
                                                                    </svg>
                                                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <div className="MuiStack-root mui-style-vb6e92">
                                                            <div className="MuiStack-root mui-style-1lhy0r8">
                                                                <span
                                                                aria-label="Clear result"
                                                                className=""
                                                                >
                                                                <button
                                                                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-ndbnha"
                                                                    tabIndex={0}
                                                                    type="button"
                                                                    aria-label="clear result"
                                                                >
                                                                    <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="ClearIcon"
                                                                    >
                                                                    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                                                    </svg>
                                                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                                </span>
                                                                <span
                                                                aria-label="Preview compiled prompt"
                                                                className=""
                                                                >
                                                                <button
                                                                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-ndbnha"
                                                                    tabIndex={0}
                                                                    type="button"
                                                                    aria-label="preview compiled prompt"
                                                                >
                                                                    <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="VisibilityIcon"
                                                                    >
                                                                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                                                                    </svg>
                                                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                                </span>
                                                                <span
                                                                aria-label="Copy result"
                                                                className=""
                                                                >
                                                                <button
                                                                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-ndbnha"
                                                                    tabIndex={0}
                                                                    type="button"
                                                                    aria-label="copy result"
                                                                >
                                                                    <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="ContentCopyIcon"
                                                                    >
                                                                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                                                                    </svg>
                                                                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                                </span>
                                                                <button
                                                                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-qbvwrb"
                                                                tabIndex={0}
                                                                type="button"
                                                                aria-label="Run just this prompt against just this scenario"
                                                                >
                                                                <svg
                                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="RefreshIcon"
                                                                >
                                                                    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
                                                                </svg>
                                                                <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                                </button>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="MuiStack-root mui-style-wpjm6p">
                                                    <div className="MuiStack-root mui-style-13epfed">
                                                        <p className="MuiTypography-root MuiTypography-body1 mui-style-k2x20f" />
                                                        <p className="MuiTypography-root MuiTypography-body1 mui-style-k2x20f" />
                                                        <p className="MuiTypography-root MuiTypography-body1 mui-style-k2x20f">
                                                        My favorite animal is a dog.
                                                        </p>
                                                    </div>
                                                    <div className="MuiBox-root mui-style-1fuqp3k" />
                                                    <div className="MuiBox-root mui-style-1fuqp3k" />
                                                    </div>
                                                </td>
                                                </tr>
                                                <tr className="MuiTableRow-root mui-style-1we75uj">
                                                <th
                                                    className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium mui-style-i30003"
                                                    scope="row"
                                                >
                                                    <div className="MuiStack-root mui-style-1x4dy9i">
                                                    <button
                                                        className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation mui-style-14tkwpr"
                                                        tabIndex={0}
                                                        type="button"
                                                    >
                                                        <span className="MuiButton-startIcon MuiButton-iconSizeMedium mui-style-1l6c7y9">
                                                        <svg
                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                            focusable="false"
                                                            aria-hidden="true"
                                                            viewBox="0 0 24 24"
                                                            data-testid="AddIcon"
                                                        >
                                                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                                                        </svg>
                                                        </span>
                                                        Add Scenario
                                                        <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                    </button>
                                                    <button
                                                        className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textNeutral MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation MuiButton-root MuiButton-text MuiButton-textNeutral MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation mui-style-10le68z"
                                                        tabIndex={0}
                                                        type="button"
                                                    >
                                                        <span className="MuiButton-startIcon MuiButton-iconSizeMedium mui-style-1l6c7y9">
                                                        <svg
                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                            focusable="false"
                                                            aria-hidden="true"
                                                            viewBox="0 0 24 24"
                                                            data-testid="ViewWeekIcon"
                                                        >
                                                            <path d="M5.33 20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1.33c1.1 0 2 .9 2 2v12c0 1.1-.89 2-2 2zM22 18V6c0-1.1-.9-2-2-2h-1.33c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2H20c1.11 0 2-.9 2-2zm-7.33 0V6c0-1.1-.9-2-2-2h-1.33c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h1.33c1.1 0 2-.9 2-2z" />
                                                        </svg>
                                                        </span>
                                                        <p className="MuiTypography-root MuiTypography-body1 mui-style-12nz3ni">
                                                        Manage scenarios
                                                        </p>
                                                        <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                    </button>
                                                    </div>
                                                </th>
                                                </tr>
                                            </tbody>
                                            </table>
                                        </div>
                                        </div>
                                        <div className="MuiStack-root mui-style-m1nqk7">
                                        <hr className="MuiDivider-root MuiDivider-fullWidth mui-style-1px5dlw" />
                                        <div className="MuiStack-root mui-style-l5c1s3">
                                            <h6 className="MuiTypography-root MuiTypography-subtitle1 mui-style-1i2x140">
                                            Add Test Suite
                                            </h6>
                                            <div className="MuiStack-root mui-style-ikzlcq">
                                            <p className="MuiTypography-root MuiTypography-body2 mui-style-14bduoz">
                                                Create your first Test Suite to run
                                                prompts from this Sandbox against test
                                                cases in bulk.
                                            </p>
                                            <a
                                                className=" mui-style-0"
                                                href="/test-suites/create"
                                                style={{ textDecoration: "none" }}
                                            >
                                                <button
                                                className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-disableElevation mui-style-76e30j"
                                                tabIndex={0}
                                                type="button"
                                                >
                                                Create New Test Suite
                                                <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                </button>
                                            </a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div
                                className="MuiBox-root mui-style-0"
                                style={{
                                    transition:
                                    "all 375ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
                                }}
                                >
                                <div className="MuiBox-root mui-style-ab8yd1">
                                    <div
                                    className="MuiDrawer-root MuiDrawer-docked mui-style-1ev5czd"
                                    style={{ opacity: 0, visibility: "hidden" }}
                                    >
                                    <div
                                        className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorRight MuiDrawer-paperAnchorDockedRight mui-style-ag4fiy"
                                        style={{
                                        visibility: "hidden",
                                        transform: "translateX(16px)"
                                        }}
                                    >
                                        <div className="MuiStack-root mui-style-1ui3riu">
                                        <h4 className="MuiTypography-root MuiTypography-h4 mui-style-9gey52">
                                            History
                                        </h4>
                                        <button
                                            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium mui-style-1ox84q8"
                                            tabIndex={0}
                                            type="button"
                                        >
                                            <svg
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                            focusable="false"
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                            data-testid="ChevronRightIcon"
                                            >
                                            <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                            </svg>
                                            <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                        </button>
                                        </div>
                                        <div className="MuiStack-root mui-style-wpeb1c">
                                        <div className="MuiStack-root mui-style-18pqika">
                                            <div style={{ paddingTop: 8 }}>
                                            <div className="MuiAutocomplete-root MuiAutocomplete-hasPopupIcon mui-style-18nc3u2">
                                                <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root mui-style-feqhe6">
                                                <label
                                                    className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-colorPrimary MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined mui-style-1p6y5ys"
                                                    data-shrink="false"
                                                    htmlFor=":ra:"
                                                    id=":ra:-label"
                                                >
                                                    Tags to filter on
                                                </label>
                                                <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiAutocomplete-inputRoot mui-style-m1q1hv">
                                                    <input
                                                    aria-invalid="false"
                                                    autoComplete="off"
                                                    id=":ra:"
                                                    placeholder="Tags"
                                                    type="text"
                                                    className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused mui-style-1tnyn9g"
                                                    aria-autocomplete="list"
                                                    aria-expanded="false"
                                                    autoCapitalize="none"
                                                    spellCheck="false"
                                                    role="combobox"
                                                    defaultValue=""
                                                    />
                                                    <div className="MuiAutocomplete-endAdornment mui-style-2iz2x6">
                                                    <button
                                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium MuiAutocomplete-popupIndicator mui-style-1ozi8yj"
                                                        tabIndex={-1}
                                                        type="button"
                                                        aria-label="Open"
                                                        title="Open"
                                                    >
                                                        <svg
                                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vnjz4i"
                                                        focusable="false"
                                                        aria-hidden="true"
                                                        viewBox="0 0 24 24"
                                                        data-testid="ArrowDropDownIcon"
                                                        >
                                                        <path d="m7 10 5 5 5-5z" />
                                                        </svg>
                                                        <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                    </button>
                                                    </div>
                                                    <fieldset
                                                    aria-hidden="true"
                                                    className="MuiOutlinedInput-notchedOutline mui-style-nqlg3w"
                                                    >
                                                    <legend className="mui-style-yjsfm1">
                                                        <span>Tags to filter on</span>
                                                    </legend>
                                                    </fieldset>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="MuiStack-root mui-style-1wkfk6g">
                                            <div className="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root vel-card mui-style-d2nbjw">
                                                <button
                                                className="MuiButtonBase-root MuiCardActionArea-root mui-style-1eqxbuo"
                                                tabIndex={0}
                                                type="button"
                                                >
                                                <div className="MuiCardContent-root mui-style-2lozas">
                                                    <div className="MuiStack-root mui-style-zvtwn">
                                                    <div className="MuiStack-root mui-style-j7qwjs">
                                                        <p className="MuiTypography-root MuiTypography-body2 mui-style-kny7fu">
                                                        Rakesh Goyal
                                                        </p>
                                                        <p className="MuiTypography-root MuiTypography-body2 mui-style-kny7fu">
                                                        September 5th, 2023
                                                        </p>
                                                        <p className="MuiTypography-root MuiTypography-body2 mui-style-kny7fu">
                                                        1:19 PM
                                                        </p>
                                                    </div>
                                                    <div className="vel-show-on-hover">
                                                        <div
                                                        className="MuiStack-root mui-style-j7qwjs"
                                                        style={{
                                                            opacity: 0,
                                                            visibility: "hidden"
                                                        }}
                                                        >
                                                        <div className="MuiAutocomplete-root MuiAutocomplete-hasPopupIcon mui-style-rfbme0">
                                                            <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root mui-style-feqhe6">
                                                            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-sizeSmall MuiInputBase-adornedEnd MuiAutocomplete-inputRoot mui-style-m1q1hv">
                                                                <input
                                                                aria-invalid="false"
                                                                autoComplete="off"
                                                                id=":rd:"
                                                                placeholder="Tags"
                                                                readOnly=""
                                                                type="text"
                                                                className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused mui-style-14y1b7"
                                                                aria-autocomplete="list"
                                                                aria-expanded="false"
                                                                autoCapitalize="none"
                                                                spellCheck="false"
                                                                role="combobox"
                                                                defaultValue=""
                                                                />
                                                                <div className="MuiAutocomplete-endAdornment mui-style-2iz2x6" />
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </button>
                                                <button
                                                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium MuiAutocomplete-popupIndicator mui-style-1ozi8yj"
                                                tabIndex={-1}
                                                type="button"
                                                aria-label="Open"
                                                title="Open"
                                                >
                                                <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                                                </button>
                                            </div>
                                            <fieldset
                                                aria-hidden="true"
                                                className="MuiOutlinedInput-notchedOutline mui-style-nqlg3w"
                                            >
                                                <legend className="mui-style-ihdtdm">
                                                <span className="notranslate">​</span>
                                                </legend>
                                            </fieldset>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <span className="MuiCardActionArea-focusHighlight mui-style-jo3ec3" />
                                <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </main>
                </div>
            </div>
            <div />
            <next-route-announcer>
                <p
                aria-live="assertive"
                id="__next-route-announcer__"
                role="alert"
                style={{
                    border: 0,
                    clip: "rect(0px, 0px, 0px, 0px)",
                    height: 1,
                    margin: "-1px",
                    overflow: "hidden",
                    padding: 0,
                    position: "absolute",
                    width: 1,
                    whiteSpace: "nowrap",
                    overflowWrap: "normal"
                }}
                >
                /prompt-sandboxes/156bb808-ab74-4c0c-b5b0-2b05e9e1da43
                </p>
            </next-route-announcer>
            <div id="chmln-dom" style={{ position: "static" }}>
                <div id="chmln" data-powered-by="https://chameleon.io/how" />
                <div id="chmln-prefetch-images" />
            </div>
        </div>
    )

}