// Copyright 2023 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Learner dashboard page root component.
 */

import { Component } from '@angular/core';
import { AppConstants } from 'app.constants';
import { BaseRootComponent, MetaTagData } from 'pages/base-root.component';

@Component({
  selector: 'oppia-learner-dashboard-page-root',
  templateUrl: './learner-dashboard-page-root.component.html',
})
export class LearnerDashboardPageRootComponent extends BaseRootComponent {
  title: string =
    AppConstants.PAGES_REGISTERED_WITH_FRONTEND.LEARNER_DASHBOARD.TITLE;

  meta: MetaTagData[] =
    AppConstants.PAGES_REGISTERED_WITH_FRONTEND.LEARNER_DASHBOARD.META as
    unknown as Readonly<MetaTagData>[];
}
