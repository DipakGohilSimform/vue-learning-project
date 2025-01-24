<template>
  <div class="auth-layout">
    <div class="form">
      <LogoSm class="logo" />
      <h1 class="form-title">Sign Up</h1>
      <div class="social-btn-wrapper">
        <a-button type="primary" :icon="h(IconGoogle)" class="social-btn">
          Google
        </a-button>
        <a-button type="primary" :icon="h(IconFacebook)" class="social-btn">
          Facebook
        </a-button>
      </div>
      <a-divider>Or</a-divider>
      <a-form layout="vertical">
        <a-form-item label="Email Address">
          <a-input placeholder="Input email address" />
        </a-form-item>
        <a-form-item label="Password" name="password">
          <a-input-password placeholder="Input password">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>
        <div class="reset-pass-wrapper">
          <a-checkbox>Remember me</a-checkbox>
          <a class="forget-pass">Reset Password?</a>
        </div>
        <a-button type="primary" block>Log in</a-button>
      </a-form>
    </div>
    <div class="mockup"><LoginMockup /></div>
  </div>
</template>

<script setup lang="ts">
import LogoSm from "@/assets/svgs/LogoSm.vue";
import { h } from "vue";
import IconGoogle from "@/assets/svgs/IconGoogle.vue";
import IconFacebook from "@/assets/svgs/IconFacebook.vue";
import LoginMockup from "@/assets/svgs/LoginMockup.vue";
</script>
