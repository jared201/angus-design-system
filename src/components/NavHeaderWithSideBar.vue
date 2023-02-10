<template>
  <cv-header aria-label="Carbon header">
    <cv-header-menu-button aria-label="Header menu" aria-controls="side-nav" />
    <cv-skip-to-content href="#main-content">
      Skip to content
    </cv-skip-to-content>
    <cv-header-name href="/" prefix="Angus">
      [Platform]
    </cv-header-name>

    <cv-header-nav aria-label="Carbon nav">
      <cv-header-menu-item to="/eclaims">
        Philhealth eClaims
      </cv-header-menu-item>
    </cv-header-nav>
    <template v-slot:left-panels v-if="areLeftPanels">
      <cv-side-nav id="side-nav" rail>
        <cv-side-nav-items>
          <cv-header-side-nav-items divider>
            <cv-header-menu-item href="javascript:void(0)">
              Link 1
            </cv-header-menu-item>
            <cv-header-menu-item href="javascript:void(0)">
              Link 2
            </cv-header-menu-item>
            <cv-header-menu-item href="javascript:void(0)">
              Link 3
            </cv-header-menu-item>
            <cv-header-menu aria-label="Link 4" title="Link 4" :hover-toggle="false">
              <cv-header-menu-item href="javascript:void(0)">
                Submenu Link 1
              </cv-header-menu-item>
              <cv-header-menu-item href="javascript:void(0)">
                Submenu Link 2
              </cv-header-menu-item>
              <cv-header-menu-item href="javascript:void(0)">
                Submenu Link 3
              </cv-header-menu-item>
            </cv-header-menu>
          </cv-header-side-nav-items>

          <cv-side-nav-menu title="Reports">
            <cv-side-nav-menu-item href="javascript:void(0)" active>
              Eligible Patients
            </cv-side-nav-menu-item>
            <cv-side-nav-menu-item href="javascript:void(0)">
              Completed Claims
            </cv-side-nav-menu-item>
            <cv-side-nav-menu-item href="javascript:void(0)">
              Pending Claims
            </cv-side-nav-menu-item>
          </cv-side-nav-menu>
<!--          <cv-side-nav-menu title="L1 menu">
            <cv-side-nav-menu-item href="javascript:void(0)">
              L2 menu item
            </cv-side-nav-menu-item>
            <cv-side-nav-menu-item href="javascript:void(0)" aria-current="page">
              L2 menu item
            </cv-side-nav-menu-item>
            <cv-side-nav-menu-item href="javascript:void(0)">
              L2 menu item
            </cv-side-nav-menu-item>
          </cv-side-nav-menu>
          <cv-side-nav-link href="javascript:void(0)">
            L1 link
          </cv-side-nav-link>
          <cv-side-nav-link href="javascript:void(0)">
            L1 link
          </cv-side-nav-link>-->

        </cv-side-nav-items>
      </cv-side-nav>
    </template>
    <template v-slot:header-global>
      <cv-header-global-action
          aria-label="Notifications"
          aria-controls="notifications-panel"
          @click="actionNotifications"
          label="Notifications"
          tipPosition="bottom"
          tipAlignment="start"
      >
        <Notification20 />
      </cv-header-global-action>
      <cv-header-global-action
          aria-label="User avatar"
          @click="actionUserAvatar"
          aria-controls="user-panel"
          label="Log in"
          tipPosition="bottom"
          tipAlignment="center"
      >
        <UserAvatar20 v-if="loggedIn"/>
        <Login20 v-else />
      </cv-header-global-action>
      <cv-header-global-action
          aria-label="App switcher"
          aria-controls="switcher-panel"
          @click="actionAppSwitcher"
          label="App switcher"
          tipPosition="bottom"
          tipAlignment="end"
      >

        <Switcher20 />
      </cv-header-global-action>
    </template>

    <template v-slot:right-panels v-if="areRightPanels">

      <cv-header-panel  id="user-panel">
        An empty user panel
      </cv-header-panel>
      <cv-header-panel  id="notifications-panel">
        An empty panel
      </cv-header-panel>
      <cv-header-panel id="switcher-panel">
        <cv-switcher>
          <cv-switcher-item>
            <cv-switcher-item-link href="javascript:void(0)" selected>
              Selected app
            </cv-switcher-item-link>
          </cv-switcher-item>
          <cv-switcher-item>
            <cv-switcher-item-link href="javascript:void(0)">
              Clarity - PMHC MDS
            </cv-switcher-item-link>
          </cv-switcher-item>
          <cv-switcher-item>
            <cv-switcher-item-link to="/eclaims">
              Philhealth eClaims
            </cv-switcher-item-link>
          </cv-switcher-item>
          <cv-switcher-item>
            <cv-switcher-item-link href="javascript:void(0)">
              Philhealth CEW
            </cv-switcher-item-link>
          </cv-switcher-item>
          <cv-switcher-item>
            <cv-switcher-item-link href="javascript:void(0)">
              Clarity - Allied Health
            </cv-switcher-item-link>
          </cv-switcher-item>
          <cv-switcher-item>
            <cv-switcher-item-link href="javascript:void(0)">
              Clarity - ABA (Advanced Behaviour Analysis)
            </cv-switcher-item-link>
          </cv-switcher-item>
        </cv-switcher>
      </cv-header-panel>
    </template>
  </cv-header>
</template>

<script>
import {
  Login20,
  Notification20,
  UserAvatar20,
} from '@carbon/icons-vue';
import {Switcher20} from "@carbon/icons-vue";
export default {
  name: "NavHeaderWithSideBar",
  components: {
    Login20,
    Notification20,
    UserAvatar20,
    Switcher20
  },
  data() {
    return {
      loggedIn: false,

    };
  },
  methods: {
    actionNotifications() {
      console.log("actionNotifications");
    },
    actionUserAvatar() {
      console.log("actionUserAvatar");
    },
    actionAppSwitcher() {
      console.log("actionAppSwitcher");
    },
  },
  computed: {
    areLeftPanels() {
      return true;
    },
    areRightPanels() {
      return true;
    },
  },
}
</script>

<style scoped>

</style>