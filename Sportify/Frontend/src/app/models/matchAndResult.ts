import { MatchDto } from "../openapi";
import { MatchResultHistoryDto } from "../userScoresOpenApi";

export class MatchAndResult
{
  matchDto:MatchDto;
  matchResult: MatchResultHistoryDto;
  selectedTeam: String;
}
