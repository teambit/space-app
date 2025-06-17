import React, { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { TextInput } from './text-input.js';

const commonWrapperStyle: React.CSSProperties = {
  padding: 'var(--spacing-large, 32px)',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--spacing-large, 32px)',
  maxWidth: '500px',
  margin: 'var(--spacing-medium, 24px) auto',
};

export const DefaultAndPlaceholderInputs = () => {
  const [name, setName] = useState('');
  const [callSign, setCallSign] = useState('');

  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={commonWrapperStyle}>
          <TextInput
            id="astronaut-name"
            label="Astronaut Name (Default)"
            value={name}
            onChange={setName}
            name="astronautName"
          />
          <TextInput
            id="spacecraft-callsign"
            label="Spacecraft Callsign (With Placeholder)"
            value={callSign}
            onChange={setCallSign}
            name="spacecraftCallsign"
            placeholder="e.g., 'Odyssey Unit 01'"
          />
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const RequiredAndTypedInputs = () => {
  const [missionName, setMissionName] = useState('');
  const [commsChannel, setCommsChannel] = useState('121.5');

  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={commonWrapperStyle}>
          <TextInput
            id="mission-objective"
            label="Primary Mission Objective"
            value={missionName}
            onChange={setMissionName}
            name="missionObjective"
            placeholder="e.g., Establish Martian Outpost"
            required
          />
          <TextInput
            id="communication-channel"
            label="Emergency Communication Channel (MHz)"
            value={commsChannel}
            onChange={setCommsChannel}
            name="communicationChannel"
            type="number"
            placeholder="Enter frequency in MHz"
          />
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const EmailAndPasswordInputs = () => {
  const [supervisorEmail, setSupervisorEmail] = useState('');
  const [accessKey, setAccessKey] = useState('');

  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={commonWrapperStyle}>
          <TextInput
            id="supervisor-email"
            label="Mission Supervisor Email"
            type="email"
            name="supervisorEmail"
            value={supervisorEmail}
            onChange={setSupervisorEmail}
            placeholder="supervisor@corpinc.mars"
            required
          />
          <TextInput
            id="secure-access-key"
            label="Secure System Access Key"
            type="password"
            name="secureAccessKey"
            value={accessKey}
            onChange={setAccessKey}
            placeholder="Enter confidential access key"
            required
          />
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const InputStatesDemo = () => {
  const [errorCodeVal, setErrorCodeVal] = useState('Olympus Mons Base');

  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={commonWrapperStyle}>
          <TextInput
            id="last-telemetry-signal"
            label="Last Telemetry Signal Origin"
            value="Mars Orbital Station Alpha"
            name="lastTelemetrySignal"
            disabled
            placeholder="Signal origin point"
          />
          <TextInput
            id="docking-bay-code"
            label="Docking Bay Access Code"
            value={errorCodeVal}
            name="dockingBayCode"
            onChange={setErrorCodeVal}
            error
            errorMessage="Access Denied: Code Mismatch. Contact Command."
            placeholder="Enter docking code"
            required
          />
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};