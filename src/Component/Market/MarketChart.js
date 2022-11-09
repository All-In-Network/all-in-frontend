import React from 'react';
import { CandleChart } from './Charting';

function MarketChart() {
  return (
    <div className="col-xl-12 col-xxl-8">
      <div className="col-xl-12">
        <div className="card">
          <div className="card-body">
            <div style={{ height: '690px' }}>
              <div
                style={{
                  position: 'relative',
                  boxSizing: 'content-box',
                  width: '100%',
                  height: '100%',
                  margin: '0 auto !important',
                  padding: '0 !important',
                  fontFamily: '-apple-system',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'transparent',
                    padding: '0 !important',
                  }}
                >
                  <CandleChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketChart;
