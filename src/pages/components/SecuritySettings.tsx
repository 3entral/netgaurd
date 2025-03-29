import React, { useState } from 'react';
import { Save, Shield, Lock, User } from 'lucide-react';

interface SecuritySettingsProps {
  onSave: () => void;
}

export default function SecuritySettings({ onSave }: SecuritySettingsProps) {
  const [settings, setSettings] = useState({
    adminPath: '/admin',
    username: 'admin',
    password: '',
    twoFactorEnabled: false,
    ipWhitelist: '',
    maxLoginAttempts: 3,
    sessionTimeout: 30,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/security-settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
      });

      if (!response.ok) throw new Error('Failed to save security settings');
      onSave();
    } catch (error) {
      console.error('Error saving security settings:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Security Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Admin Path
            </label>
            <input
              type="text"
              value={settings.adminPath}
              onChange={(e) => setSettings({ ...settings, adminPath: e.target.value })}
              className="w-full px-4 py-2 bg-[#243040] border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Admin Username
            </label>
            <input
              type="text"
              value={settings.username}
              onChange={(e) => setSettings({ ...settings, username: e.target.value })}
              className="w-full px-4 py-2 bg-[#243040] border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              New Password
            </label>
            <input
              type="password"
              value={settings.password}
              onChange={(e) => setSettings({ ...settings, password: e.target.value })}
              className="w-full px-4 py-2 bg-[#243040] border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Leave blank to keep current password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              IP Whitelist
            </label>
            <input
              type="text"
              value={settings.ipWhitelist}
              onChange={(e) => setSettings({ ...settings, ipWhitelist: e.target.value })}
              className="w-full px-4 py-2 bg-[#243040] border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Comma-separated IPs"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Max Login Attempts
            </label>
            <input
              type="number"
              value={settings.maxLoginAttempts}
              onChange={(e) => setSettings({ ...settings, maxLoginAttempts: parseInt(e.target.value) })}
              className="w-full px-4 py-2 bg-[#243040] border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500"
              min="1"
              max="10"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Session Timeout (minutes)
            </label>
            <input
              type="number"
              value={settings.sessionTimeout}
              onChange={(e) => setSettings({ ...settings, sessionTimeout: parseInt(e.target.value) })}
              className="w-full px-4 py-2 bg-[#243040] border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500"
              min="5"
              max="1440"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={settings.twoFactorEnabled}
              onChange={(e) => setSettings({ ...settings, twoFactorEnabled: e.target.checked })}
              className="rounded border-blue-500/20 bg-[#243040] text-blue-500 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-300">Enable Two-Factor Authentication</span>
          </label>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          Save Security Settings
        </button>
      </div>
    </form>
  );
}