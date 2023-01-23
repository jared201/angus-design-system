<template>
  <cv-header aria-label="Carbon header">
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
    <template v-slot:left-panels v-if="areLeftPanels">

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
      return false;
    },
    areRightPanels() {
      return true;
    },
  },
}
</script>

<style scoped>

</style>