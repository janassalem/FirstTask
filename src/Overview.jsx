import React from 'react';
import Chart from 'react-apexcharts';
import { ChevronUp, ChevronDown, User, Monitor, Microscope, BriefcaseMedical } from 'lucide-react';

const Overview = () => {
    const monthlyReportOptions = {
        chart: { type: 'line', toolbar: { show: false }, zoom: { enabled: false } },
        colors: ['#4F46E5', '#6366F1'],
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth', width: 3 },
        grid: { show: false },
        xaxis: {
            categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            labels: { style: { colors: '#6B7280' } },
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        yaxis: {
            labels: { formatter: v => `${v}`, style: { colors: '#6B7280' } }
        },
        legend: {
            position: 'top', horizontalAlign: 'right', markers: { width: 12, height: 12, radius: 12 }
        },
        tooltip: { theme: 'dark' }
    };

    const monthlyReportSeries = [
        { name: 'Number of reports generated monthly', data: [400,350,480,520,450,600,720,600,550,480,450,400] },
        { name: 'Number of matching reports', data: [350,280,400,450,380,500,620,550,480,400,380,350] },
    ];

    const smallLineChartOptions = {
        chart: { type: 'line', sparkline: { enabled: true } },
        colors: ['#4F46E5'],
        stroke: { curve: 'smooth', width: 2 },
        tooltip: { enabled: false }
    };
    const smallLineChartSeries = [{ data: [10, 15, 8, 20, 12, 18, 14, 22] }];

    const donutOptions = (label, color) => ({
        chart: { type: 'donut' },
        stroke: { width: 0 },
        dataLabels: { enabled: false },
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    size: '80%',
                    labels: {
                        show: true,
                        total: { show: true, showAlways: true, label, fontSize: '24px', fontWeight: 600, fontFamily: 'Inter', color: '#374151' }
                    }
                }
            }

        },
        colors: [color, '#E5E7EB'],
        legend: { show: false }
    });

    const summaryCards = [
        { title: 'Recorded Diseases', value: '27632', change: '+2.5%', comparison: 'Compared to (21340 last year)', icon: <BriefcaseMedical size={24} className="text-indigo-600" /> },
        { title: 'Total reports', value: '20199', change: '+0.5%', comparison: 'Compared to (19000 last year)', icon: <Microscope size={24} className="text-indigo-600" /> },
        { title: 'Reports Matching', value: '110', change: '-1.5%', comparison: 'Compared to (165 last year)', icon: <Monitor size={24} className="text-indigo-600" /> },
        { title: 'Registered Users', value: '110', change: '-1.5%', comparison: 'Compared to (165 last year)', icon: <User size={24} className="text-indigo-600" /> },
    ];

    return (
        <div className="font-sans min-h-screen bg-gradient-to-br from-white to-indigo-50 text-gray-800">
            <main className="container mx-auto p-4 md:p-8">
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Hi Mr. Bahr, Good Morning...</h1>

                {/* Top row stat cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {summaryCards.map((card, i) => (
                        <div key={i} className="bg-white p-5 rounded-2xl shadow-lg">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-medium text-gray-500">{card.title}</span>
                                {card.icon}
                            </div>
                            <div className="flex items-center gap-30">
                                <p className="text-3xl font-normal text-gray-900">{card.value}</p>
                                <p className={`text-sm flex items-center gap-1 ${card.change.includes('-') ? 'text-red-500' : 'text-green-500'}`}>
                                    {card.change.includes('-') ? <ChevronDown size={14} /> : <ChevronUp size={14} />}{card.change}
                                </p>
                            </div>
                            <p className="text-xs text-gray-400 mt-1">{card.comparison}</p>
                        </div>
                    ))}
                </div>

                {/* Main content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left: Monthly Report */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-lg">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">Monthly Report Analytics</h2>
                        <div className="h-64 md:h-80">
                            <Chart options={monthlyReportOptions} series={monthlyReportSeries} type="line" height="100%" />
                        </div>
                    </div>

                    {/* Right: Donuts + Visitors */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-6">
                        {/* Donut 1 */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
                            <div className="w-40 h-40">
                                <Chart options={donutOptions('68%', '#4F46E5')} series={[68, 32]} type="donut" width="100%" />
                            </div>
                            <p className="text-sm text-gray-500 mt-4">Hit rate for AI this year</p>
                        </div>

                        {/* Donut 2 */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
                            <div className="w-40 h-40">
                                <Chart options={donutOptions('76%', '#6366F1')} series={[76, 24]} type="donut" width="100%" />
                            </div>
                            <p className="text-sm text-gray-500 mt-4">Successfully generated reports</p>
                        </div>

                        {/* Visitors Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg lg:col-span-2">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-2xl font-bold text-gray-900">10,254</p>
                                <div className="flex items-center text-red-500 text-sm">
                                    <ChevronDown size={14} /><span>1.5%</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">Visitors this year</p>
                            <div className="h-20">
                                <Chart options={smallLineChartOptions} series={smallLineChartSeries} type="line" height="100%" />
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default Overview;
