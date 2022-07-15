﻿using Microsoft.Extensions.Diagnostics.HealthChecks;

namespace MonitoringAPI.HealthChecks;

public class RandomHealthCheck : IHealthCheck
{
    public Task<HealthCheckResult> CheckHealthAsync(HealthCheckContext context,
        CancellationToken cancellationToken = default)
    {
        int responseTimeInMs = Random.Shared.Next(300);

        if (responseTimeInMs < 100)
        {
            return Task.FromResult(
                HealthCheckResult.Healthy($"The response time is excellent: ({responseTimeInMs}ms)")
            );
        }
        else if (responseTimeInMs < 200)
        {
            return Task.FromResult(
                HealthCheckResult.Degraded($"The response is higher than expected: ({responseTimeInMs}ms)")
            );
        }
        else
        {
            return Task.FromResult(
                HealthCheckResult.Unhealthy($"The response time is too slow and needs to be looked at: ({responseTimeInMs}ms)")
);
        }

    }
}
